import React, { useState } from 'react';
import Footer from '../Components/Footer';
import { FaEnvelopeOpen, FaPhoneAlt, FaPhoneSquareAlt, FaTelegramPlane } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Function to update state when user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to create mailto link and open email client
  const handleSendEmail = () => {
    const { name, email, phone, message } = formData;
    const subject = `Contact Request from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${message}`;
    
    window.location.href = `mailto:naturecareservicesllc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className='bg-gray-100 p-3'>
      {/* Body */}
      <div>
        <h2 className='text-center font-bold text-4xl text-primaryyellow pt-10'>Contact Us</h2>

        <div className='lg:flex gap-10 lg:w-[80%] w-[90%] mx-auto p-10 rounded-2xl shadow-md m-16 border border-gray-300'>
          {/* Contact Information */}
          <div className='lg:text-[16px] text-12 text-gray-700'>
            <h2 className='text-xl text-primaryyellow font-bold '>Contact Us</h2>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-1 hover:text-primaryyellow'>
              <FaPhoneAlt className='lg:size-5 text-amber-600' /> 
              <a href="tel:+1 (612) 448-5501">+1 (612) 448-5501</a>
            </p>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-1 hover:text-primaryyellow'>
              <FaPhoneSquareAlt className='lg:size-6 text-amber-600' /> 
              <a href="tel:+1 (763) 221-2319">+1 (763) 221-2319</a>
            </p>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-2 hover:text-primaryyellow'>
              <FaEnvelopeOpen className='text-amber-600 lg:size-6' /> 
              <a href="mailto:naturecareservicesllc@gmail.com" className='lg:pl-2'>
                naturecareservicesllc@gmail.com
              </a>          
            </p>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-2 hover:text-primaryyellow'>
              <FaLocationDot className='text-amber-600 size-6' /> 17445 Halifax Path, Lakeville, MN 55044
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className='font-medium text-primaryyellow'>Want to know more? Contact us below</label> <br />
              <input
                type="text"
                name="name"
                placeholder="E.g; John Doe"
                className='text-gray-800 outline-0 border-[0.5px] lg:w-[350px] rounded-sm py-1 px-2 mt-2 mb-4'
                value={formData.name}
                onChange={handleChange}
                required
              /> <br />

              <input
                type="email"
                name="email"
                placeholder="E.g; johndoe@gmail.com"
                className='text-gray-800 outline-0 border-[0.5px] lg:w-[350px] rounded-sm py-1 px-2 mb-4'
                value={formData.email}
                onChange={handleChange}
                required
              /> <br />

              <input
                type="text"
                name="phone"
                placeholder="E.g; +167123456789"
                className='text-gray-800 outline-0 border-[0.5px] lg:w-[350px] rounded-sm py-1 px-2 mb-4'
                value={formData.phone}
                onChange={handleChange}
                required
              /> <br />

              <textarea
                name="message"
                placeholder="Enter your message"
                className='text-gray-800 outline-0 border-[0.5px] lg:w-[350px] lg:h-[130px] h-[100px] rounded-sm py-1 px-2 mb-4 font-mono'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea> <br />

              <button
                type="button"
                onClick={handleSendEmail}
                className='flex gap-2 items-center text-center border rounded-md px-4 py-2 font-medium cursor-pointer hover:bg-primaryyellow hover:text-white duration-300 ease-in-out'
              >
                Send <FaTelegramPlane className='size-5' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
