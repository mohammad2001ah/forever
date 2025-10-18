import React, { useContext,useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/relatedProduct';

function Product() {

  const {productId }= useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image,setImage]= useState('');
  const [size,setSize]= useState('');

  const fetchProductData = async() =>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null ;
      }
    })
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData? (
    <div className=' border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*---------- Product data ---------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*--------------- Product image -------------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col justify-between sm:justify-start sm:gap-3 w-full sm:w-[20%]'>
            {
              productData.image.map((item, index) => (
                <img
                  src={item}
                  onClick={() => setImage(item)}
                  key={index}
                  className='w-[24%] sm:w-full sm:h-auto cursor-pointer border border-gray-200 rounded-md hover:opacity-75 transition-all'
                  alt=""
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto rounded-md shadow-md'/>
          </div>
        </div>
        {/*------------------ Product info---------------- */}
        <div className='flex-1 flex flex-col gap-6'>
          <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt=""  className='w-3.5'/>
            <img src={assets.star_icon} alt=""  className='w-3.5'/>
            <img src={assets.star_icon} alt=""  className='w-3.5'/>
            <img src={assets.star_icon} alt=""  className='w-3.5'/>
            <img src={assets.star_dull_icon} alt=""  className='w-3 5'/>
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-3'>
              {
                productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item===size?'border-orange-500':''}`}>{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 active:bg-gray-700 transition duration-200'>
              Add to Cart
          </button>
          <hr className='mt-8 sm:w-4/5 border-gray-300'/>
          <div className='text-sm text-gary-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this Product.</p>
            <p>Easy return and exchange policy within 7 days. </p>
          </div>
        </div>
      </div>
      {/* ---------description section---------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'> Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Discover a wide range of high-quality products at amazing prices. From fashion to electronics, we bring you the best shopping experience with fast delivery and excellent customer service. Shop now and enjoy exclusive deals every day!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt dolore delectus, voluptatum inventore perferendis velit atque tempora illum, autem maxime accusantium. Est ullam ducimus odit animi, enim doloribus tempora voluptates soluta. Illum voluptates, aperiam impedit sint rem nulla veniam quo facilis eum deserunt totam in dolorum praesentium iusto earum sed porro. Voluptates vel blanditiis obcaecati unde accusamus dignissimos aspernatur vero hic impedit error laboriosam quis dolor sapiente quisquam esse, nihil amet deleniti magnam qui enim! Aspernatur maxime illum tempora eligendi enim ullam rerum beatae vitae, unde qui tempore illo, sint autem explicabo doloremque ad culpa eaque voluptates quaerat et magnam hic. Veritatis amet nisi dolorum debitis? Velit assumenda excepturi eveniet? Expedita asperiores vitae exercitationem porro delectus omnis accusantium ipsa suscipit sit quod dolorem reprehenderit consequuntur beatae officia, illo quos velit, minus architecto eveniet similique! Id cumque vitae quasi eos blanditiis, quae quaerat, ullam qui dignissimos, soluta rerum in eum.</p>
        </div>
      </div>
      {/* display products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ): <div className='opacity-0'></div>
}

export default Product;
