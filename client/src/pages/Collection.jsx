import React from 'react';
import { ShopContext } from '../context/ShopContext';
import { useContext ,useState,useEffect } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const{products} =useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubcategory]=useState([]);
  const [sortType,setSortType]=useState('relavent');

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=> item !== e.target.value));
    }
    else{
      setCategory(prev=> [...prev,e.target.value]);
    }
  };

  const toggleSubcategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubcategory(prev=> prev.filter(item=> item !== e.target.value));
    }
    else{
      setSubcategory(prev=> [...prev,e.target.value]);
    }
  };

  const applyFilters=()=>{
    let productsCopy =products.slice();
    if(category.length>0){
      productsCopy= productsCopy.filter(item=> category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy= productsCopy.filter(item=> subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  };

  const sortProducts=()=>{
    let filteredProductsCopy= filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(filteredProductsCopy.sort((a,b)=> a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(filteredProductsCopy.sort((a,b)=> b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    };

  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    setFilterProducts(products);
  },[]);

  useEffect(() => {
    applyFilters();
  }, [category, subCategory]);

  return (
    <div className='flex flex-col sm:flex-row sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ?'rotate-90':'' }`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-gray-700 text-sm font-light'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Men"} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Women"} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Kids"} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
      {/* sub category filter */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p  className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-gray-700 text-sm font-light'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Topwear"}  onChange={toggleSubcategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Bottomwear"} onChange={toggleSubcategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={"Winterwear"} onChange={toggleSubcategory} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side  */}
      <div className='flex-1'>
        <div className='flex  justify-between text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"}/>
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-3'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High </option>
            <option value="high-low">Sort by: High to Low </option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} 
              name={item.name}
              price={item.price}
              id={item.id}
              image={item.image}

              />
            ))
          }
        </div>

      </div>
    </div>
  )
};

export default Collection;
