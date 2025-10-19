import React from 'react';
import { useContext,useState } from 'react';
import { ShopContext } from '../context/ShopContext';


const Login = () => {
  const [currentState, setCurrentState] = useState("Sign UP");
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    // Handle form submission logic here
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='w-16 border-none h-[1.5px] bg-gray-700 '/>
      </div>
      {currentState === 'Login'?"":<input type="text" placeholder='Username' className='w-full border-b border-gray-400 focus:outline-none py-2'/>}
      <input type="email" placeholder='Email' className='w-full border-b border-gray-400 focus:outline-none py-2'/>
      <input type="password" placeholder='Password' className='w-full border-b border-gray-400 focus:outline-none py-2'/>
      <button type='submit' className='w-full bg-black text-white py-3 mt-6 hover:bg-gray-800 transition-colors'>{currentState}</button>
      <div className='text-sm mt-4'>
        {currentState === 'Login' ? 
          <>
            <span>Don't have an account? </span>
            <button type='button' className='text-blue-600 hover:underline' onClick={() => setCurrentState('Sign UP')}>Sign Up</button>
          </>
          :
          <>
            <span>Already have an account? </span>
            <button type='button' className='text-blue-600 hover:underline' onClick={() => setCurrentState('Login')}>Login</button>
          </>
        }
      </div>


    </form>
  )
}

export default Login;
