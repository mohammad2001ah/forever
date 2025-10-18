import React from 'react';
import{Route, Router,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Order from './pages/Order';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:-[7vw] lg:-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
  )
};

export default App;
