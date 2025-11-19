import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = (setToken) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async(e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl +'/api/user/admin-login',{email,password});
      if(response.data.success){
          setToken(response.data.token);
      }else{
          toast.error("Invalid Credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input  
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
