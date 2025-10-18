import React from 'react';
import { useContext,useState,useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {

  const {products,currency,cartItems}= useContext(ShopContext);
  const [cartData,setCartData]= useState([]);
  useEffect(() => {
    const tempData = [];
  
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        const product = products.find((prod) => prod._id === itemId);
  
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            name: product.name,
            image: product.image,
            price: product.price,
            size: size,
            quantity: cartItems[itemId][size],
            totalPrice: product.price * cartItems[itemId][size]
          });
        }
      }
    }
  
    setCartData(tempData);
  }, [cartItems]);
  

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((prod) => prod._id === item._id);
            return (
              <div key={index} className="flex gap-4 mb-6">
                <div className='w-24 h-24 flex-shrink-0'>
                  <img src={productData.image[0]} alt={item.name} className='w-full h-full object-cover rounded-md'/>
                </div>
                <div className='flex-1 flex flex-col justify-between'>
                  <div>
                    <h2 className='text-lg font-medium'>{item.name}</h2>
                    <p className='text-gray-600'>Size: {item.size}</p>
                    <p className='text-gray-600'>Price: {currency}{item.price}</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium'>Quantity: {item.quantity}</p>
                    <p className='font-medium'>Total: {currency}{item.totalPrice}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Cart;
