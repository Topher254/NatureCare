import React from 'react'
import ContactNav from '../Components/ContactNav'
import Footer from '../Components/Footer'
import { FaPhoneAlt, FaPhoneSquareAlt, FaTelegram, FaTelegramPlane } from 'react-icons/fa'
import {FaEnvelopesBulk, FaLocationDot } from 'react-icons/fa6'

function Contact() {
  return (
    <div className='bg-gray-100'>

      {/* Navbar */}
      <ContactNav/>

      {/* Body */}
      <div >

        <h2 className='text-center font-bold text-4xl text-amber-600 pt-10'>Contact Us</h2>

        <div className='lg:flex gap-10 lg:w-[80%] w-[90%] mx-auto p-20 rounded-lg border-t-[0.5px] border-gray-400 shadow-lg shadow-gray-500 m-20'>

          <div className='text-[16px] text-gray-700'>
            <h2 className='text-xl text-amber-700 font-bold '>Contact Us</h2>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-1 hover:text-amber-600 duration-300 ease-in-out'> <FaPhoneAlt className='size-5 text-amber-600 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="tel:+1 (612) 448-5501">+1 (612) 448-5501</a>
            </p>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-1 hover:text-amber-600 duration-300 ease-in-out'> <FaPhoneSquareAlt className='size-6 text-amber-600 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="tel:+1 (763) 221-2319">+1 (763) 221-2319</a>
            </p>

            <p className='flex gap-1 align-middle items-center font-medium cursor-pointer py-2 hover:text-amber-600 duration-300 ease-in-out'> <FaEnvelopesBulk className='text-amber-600 size-6 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="mailto:naturecareservicesllc@gmail.com " className='pl-2'>
                naturecareservicesllc@gmail.com 
              </a>          
            </p>

            <p className='flex gap-1 align-middle items-center font-medium cursor-pointer py-2 hover:text-amber-600 duration-300 ease-in-out'> <FaLocationDot className='text-amber-600 size-6 hover:text-gray-600 duration-300 ease-in-out'/> 17445 Halifax path Lakeville, MN 55044</p>
            
          </div>

          {/* Contact Form */}
          <div>

            <form action="">
              <label htmlFor="" className='font-medium text-amber-400'>Want to know more ? Contact us below</label> <br />
              <input type="text" placeholder='E.g; John Doe' className='text-gray-800 border-[0.5px] lg:w-[350px] w-[280px] rounded-sm py-1 px-2 mt-2 mb-4' required/> <br />
              <input type="email" placeholder='E.g; johndoe@gmail.com' className='text-gray-800 border-[0.5px] lg:w-[350px] w-[280px] rounded-sm py-1 px-2 mb-4' required/> <br />
              <input type="number" placeholder='E.g; +2547123456789' className='text-gray-800 border-[0.5px] lg:w-[350px] w-[280px] rounded-sm py-1 px-2 mb-4' required/> <br />
              
              <textarea name="" id="" placeholder='Enter your text' className='text-gray-800 border-[0.5px] lg:w-[350px] w-[300px] lg:h-[130px] h-[100px] rounded-sm py-1 px-2 mb-4 font-mono' required></textarea> <br />

              <button type="submit" className='flex gap-2 items-center text-center border rounded-md px-4 py-2 font-medium cursor-pointer hover:bg-gray-700 hover:text-white duration-300 ease-in-out'>Send <FaTelegramPlane className='size-5'/> </button>
              
            </form>

            

          </div>

        </div>
        
      </div>

      {/* Footer section */}
      <Footer/>

    </div>
  )
}

export default Contact