import React from 'react'
import Footer from '../Components/Footer'
import { FaEnvelopeOpen, FaPhoneAlt, FaPhoneSquareAlt, FaTelegramPlane } from 'react-icons/fa'
import {FaEnvelopesBulk, FaLocationDot } from 'react-icons/fa6'

function Contact() {
  return (
    <div className='bg-gray-100 p-3'>

     

      {/* Body */}
      <div >

        <h2 className='text-center font-bold text-4xl text-primaryyellow pt-10'>Contact Us</h2>

        <div className='lg:flex gap-10 lg:w-[80%] w-[90%] mx-auto p-10 rounded-2xl  shadow-md m-16 border border-gray-300'>

          <div className='lg:text-[16px] text-12 text-gray-700'>
            <h2 className='text-xl text-primaryyellow font-bold '>Contact Us</h2>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-1 hover:text-primaryyellow duration-300 ease-in-out'> <FaPhoneAlt className='lg:size-5 text-amber-600 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="tel:+1 (612) 448-5501">+1 (612) 448-5501</a>
            </p>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-1 hover:text-primaryyellow duration-300 ease-in-out'> <FaPhoneSquareAlt className='lg:size-6 text-amber-600 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="tel:+1 (763) 221-2319">+1 (763) 221-2319</a>
            </p>

            <p className='flex gap-1 align-middle items-center font-medium cursor-pointer lg:py-2 hover:text-primaryyellow duration-300 ease-in-out'> <FaEnvelopeOpen className='text-amber-600 lg:size-6 size-5 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="mailto:naturecareservicesllc@gmail.com " className='lg:pl-2 flex-wrap text-[14px] lg:text-[16px]'>
                naturecareservicesllc @gmail.com 
              </a>          
            </p>

            <p className='flex gap-1 align-middle items-center font-medium cursor-pointer py-2 hover:text-primaryyellow duration-300 ease-in-out'> <FaLocationDot className='text-amber-600 size-6 hover:text-gray-600 duration-300 ease-in-out'/> 17445 Halifax path Lakeville, MN 55044</p>
            
          </div>

          {/* Contact Form */}
          <div>

            <form action="">
              <label htmlFor="" className='font-medium text-primaryyellow'>Want to know more ? Contact us below</label> <br />
              <input type="text" placeholder='E.g; John Doe' className='text-gray-800 outline-0 w-fit  border-[0.5px] lg:w-[350px] md:w-full rounded-sm py-1 px-2 mt-2 mb-4' required/> <br />
              <input type="email" placeholder='E.g; johndoe@gmail.com' className='text-gray-800 outline-0  border-[0.5px] lg:w-[350px] w-fit md:w-full rounded-sm py-1 px-2 mb-4' required/> <br />
              <input type="text" placeholder='E.g; +167123456789' className='text-gray-80 outline-0 0 border-[0.5px] lg:w-[350px] w-fit md:w-full rounded-sm py-1 px-2 mb-4' required/> <br />
              
              <textarea name="" id="" placeholder='Enter your text' className='text-gray-800 outline-0  border-[0.5px] lg:w-[350px] w-fit md:w-full lg:h-[130px] h-[100px] rounded-sm py-1 px-2 mb-4 font-mono' required></textarea> <br />

              <button type="submit" className='flex gap-2 items-center text-center border rounded-md px-4 py-2 font-medium cursor-pointer hover:bg-gray-700 hover:text-white duration-300 ease-in-out'>Send <FaTelegramPlane className='size-5'/> </button>
              
            </form>

            

          </div>

        </div>
        
      </div>

  

    </div>
  )
}

export default Contact