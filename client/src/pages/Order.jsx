import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';


const Order = () => {
  const {products ,currency}= useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"Your"} text2={"Orders"}/>
      </div>

      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className='flex items-center gap-4'>
                <img src={item.image[0]} alt={item.name} className='w-16 sm:w-20'/>
                <div>
                  <h3 className='font-medium'>{item.name}</h3>
                  <p className='text-sm'>Quantity: 1</p>
                  <p className='text-sm'>Size: M</p>
                </div>
                
              </div>
              
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Order;
