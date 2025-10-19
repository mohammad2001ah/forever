import React from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { useContext,useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const [method ,setMethod]=useState("cod"); 

  const{navigate}=useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* --------------Left Side------------ */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="Email" placeholder='Email' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Postal Code' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="tel" placeholder='Phone Number' />
      </div>
      {/* --------------Right Side------------ */}
      <div className='w-full sm:max-w-[400px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"ORDER"} text2={"SUMMARY"}/>
        </div>
        {/* Order Summary Items will go here */}
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        {/*  */}
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            
            {/* Stripe */}
            <label  onClick={()=>setMethod("stripe")} className='flex items-center justify-center gap-3 border p-3 px-6 cursor-pointer rounded-lg hover:shadow-md transition w-full lg:w-auto'>
              <input type="radio" name="payment" className='w-4 h-4 accent-black' />
              <div className="flex items-center justify-center">
                <img className='h-6 object-contain' src={assets.stripe_logo} alt="Stripe" />
              </div>
            </label>

            {/* Razorpay */}
            <label onClick={()=>setMethod("razorpay")} className='flex items-center justify-center gap-3 border p-3 px-6 cursor-pointer rounded-lg hover:shadow-md transition w-full lg:w-auto'>
              <input type="radio" name="payment" className='w-4 h-4 accent-black' />
              <div className="flex items-center justify-center">
                <img className='h-6 object-contain' src={assets.razorpay_logo} alt="Razorpay" />
              </div>
            </label>

            {/* Cash on Delivery */}
            <label onClick={()=>setMethod("cod")} className='flex items-center justify-center gap-3 border p-3 px-6 cursor-pointer rounded-lg hover:shadow-md transition w-full lg:w-auto'>
              <input type="radio" name="payment" className='w-4 h-4 accent-black' />
              <p className='text-gray-700 text-sm font-semibold'>CASH ON DELIVERY</p>
            </label>
          </div>
        </div>
        {/*  */}
        <div className='w-full text-end mt-10'>
          <button onClick={()=>navigate("/order")} className='px-16 py-3 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors'>
            PLACE ORDER
          </button>
        </div>
      </div>
      
    </div>
  )
};

export default PlaceOrder;
