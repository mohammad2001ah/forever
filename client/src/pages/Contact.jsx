import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      {/* Title */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-10 mb-16 px-6 md:px-12">
        <img 
          src={assets.contact_img} 
          alt="contact" 
          className="w-11/12 lg:w-1/2 rounded shadow-md"
        />
        <div className="w-11/12 lg:w-1/2 text-gray-700 flex flex-col gap-6">
          <p>
            Have a question, feedback, or need assistance? We’d love to hear from you!  
            Our team is always ready to help you with your orders, returns, or any inquiries.
          </p>

          <div className="flex flex-col gap-4 text-gray-800">
            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p>Amman, Jordan</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p>+962 7 9000 0000</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">✉️ Email</h3>
              <p>support@yourstore.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="text-3xl py-4 text-center">
        <Title text1={"GET"} text2={"IN TOUCH"} />
      </div>

      <form className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 flex flex-col gap-5 mb-16">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="border-b border-gray-400 focus:outline-none py-2"
          required
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="border-b border-gray-400 focus:outline-none py-2"
          required
        />
        <textarea 
          placeholder="Your Message" 
          rows="5" 
          className="border-b border-gray-400 focus:outline-none py-2 resize-none"
          required
        ></textarea>
        <button 
          type="submit" 
          className="bg-black text-white py-3 mt-4 rounded-md hover:bg-gray-800 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
