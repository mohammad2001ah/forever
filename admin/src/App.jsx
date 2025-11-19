import React from 'react'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { Route,Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { useState } from 'react'  
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';


export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [token, setToken] = useState("")
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === "" ? <Login /> :
        <>
          <NavBar />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='W-[70%] mx-auto ml-[max(5vm,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/orders' element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>}

    </div>
  )
}

export default App
