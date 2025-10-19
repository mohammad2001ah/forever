import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"About"} text2={"Us"}/>
      </div>

      <div className='flex flex-col lg:flex-row items-center gap-8 mt-10 mb-16'>
        <img src={assets.about_img} alt="about us" className='w-11/12 lg:w-1/2 rounded'/>
        <div className='w-11/12 lg:w-1/2 text-gray-700 flex flex-col gap-4'>
          <p>
            Welcome to our online store! We are passionate about providing high-quality products that cater to your needs and preferences. Our mission is to offer a seamless shopping experience, ensuring that you find exactly what you're looking for with ease and convenience.
          </p>
          <p>
            Our team is dedicated to curating a diverse selection of items, ranging from the latest fashion trends to essential everyday products. We believe in quality, affordability, and customer satisfaction, which is why we work closely with trusted suppliers to bring you the best deals.
          </p>
          <p>
            Thank you for choosing our store for your shopping needs. We look forward to serving you and making your shopping experience enjoyable and memorable!
          </p>
        </div>
      </div>
      <div className='text-3xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4 md:px-8">
  {/* Card 1 */}
  <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
      <img src={assets.quality_icon} alt="quality" className="w-10 h-10" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">Quality Products</h3>
    <p className="text-gray-600 mt-2">
      We prioritize quality in every product we offer, ensuring you receive only the best.
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
      <img src={assets.support_img} alt="support" className="w-10 h-10" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">Excellent Support</h3>
    <p className="text-gray-600 mt-2">
      Our customer support team is here to assist you with any inquiries or issues.
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-100 mb-4">
      <img src={assets.exchange_icon} alt="shipping" className="w-10 h-10" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900">Fast Shipping</h3>
    <p className="text-gray-600 mt-2">
      We offer quick and reliable shipping options to get your orders to you promptly.
    </p>
  </div>
</div>

    </div>
  )
}

export default About;
