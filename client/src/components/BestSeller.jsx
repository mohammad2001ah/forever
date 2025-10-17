import React, { use } from 'react'
import { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const{products}=useContext(ShopContext);
  const [bestSeller,setBestSeller]=useState([]);

  useEffect(() => {
    const bestProduct=products.filter((item)=>item.bestseller);
    setBestSeller(bestProduct.slice(0,5));
  }, []);
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"BEST"} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est reiciendis harum libero eum, velit odit similique animi eos inventore doloremque nihil consequatur, placeat labore architecto accusantium sed doloribus, laudantium saepe?</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>   
        {
          bestSeller.map((item,index)=>(
            <ProductItem key={index} className='text-gray-700 cursor-pointer'
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller;
