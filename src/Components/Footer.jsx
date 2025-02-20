import React from 'react'
import { FaEnvelope, FaHandPointLeft, FaHandPointRight, FaHome,FaPhone, FaPhoneSquare, FaQuestion, FaRegClock, FaTelegramPlane, FaTools } from 'react-icons/fa'
import { FaCalendarXmark, FaLocationDot} from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' bg-amber-200 pt-10'>

      <div className='lg:flex justify-between text-center w-[80%] mx-auto pb-6'>

        {/* Section 1 */}
        <div >

          <div className='size-36 '>
              <a href="/">
                <h2 className='text-3xl font-extrabold text-yellow-600 py-1 w-[200px] hover:text-yellow-800 duration-300 ease-in-out'>Nature Care <br /> Services</h2>
              </a>
          </div>

          <div className='lg:text-[16px] text-[14px] justify-self-center  text-gray-700'>
            <h2 className='text-xl text-amber-700 font-bold '>Contact Us</h2>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-1 hover:text-amber-600 duration-300 ease-in-out'> <FaPhone className='size-5 text-amber-600 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="tel:+1 (612) 448-5501">+1 (612) 448-5501</a>
            </p>

            <p className='flex gap-1 items-center font-medium cursor-pointer py-1 hover:text-amber-600 duration-300 ease-in-out'> <FaPhoneSquare className='size-6 text-amber-600 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="tel:+1 (763) 221-2319">+1 (763) 221-2319</a>
            </p>

            <p className='flex gap-1 align-middle items-center font-medium cursor-pointer py-2 hover:text-amber-600 duration-300 ease-in-out'> <FaEnvelope className='text-amber-600 size-6 hover:text-gray-600 duration-300 ease-in-out'/> 
              <a href="mailto:naturecareservicesllc@gmail.com " className='pl-2'>
                naturecareservicesllc@gmail.com 
              </a>          
            </p>

            <p className='flex gap-1 align-middle items-center font-medium cursor-pointer py-2 hover:text-amber-600 duration-300 ease-in-out'> <FaLocationDot className='text-amber-600 size-6 hover:text-gray-600 duration-300 ease-in-out'/> 17445 Halifax path Lakeville, MN 55044</p>
            
          </div>

        </div>

        {/* Section 2 / Column 2 */}
        <div className='text-center justify-self-center lg:px-4 px-6'>

          <div className='mx-auto lg:pb-[65px] pb-[20px] mt-[50px]'>
            <FaRegClock className='size-[80px] text-amber-500'/>
          </div>

          <div className='lg:text-[16px] text-[15px] text-left'>
            
            <h2 className='text-xl font-bold text-amber-700'>Hours of Operation</h2>
            <p className=' font-medium text-gray-700'>Week Days : 8:00 A.M - 5:00 P.M</p>
            <p className='flex gap-2 font-medium text-gray-700'>Weekends : Closed <FaCalendarXmark className='size-5 text-amber-600'/></p>
          </div>

        </div>

        {/* Section 3 / Column 3 */}
        <div className='items-center pt-10 pr-6'>

          <div className='text-[18px] text-gray-700 pt-4 text-center'>
            <h2 className='text-[22px] font-bold text-amber-700 pb-2'>Quick Links</h2>

            {/* Links */}
            <ul className='text-start font-medium justify-self-center'>
              <li className='flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out'>
                <FaHome className='text-gray-700'/>
                <Link to="/">Home</Link>
              </li>
              <li className='flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out'>
                <FaQuestion className='text-gray-700'/>
                <Link to="/about">About Us</Link> 
              </li>
              <li className='flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out'>
                <FaHandPointRight className='text-gray-700'/>
                <Link to="/gettingstarted">Get Started</Link>   
              </li>
              <li className='flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out'>
                <FaTools className='text-gray-700'/>  
                <Link to="/services">Services</Link> 
              </li>
              <li className='flex gap-1 items-center hover:text-amber-500 hover:scale-110 duration-300 ease-in-out'>
                <FaTelegramPlane className='text-gray-700'/>
                <Link to="/contact">Contact</Link> 
              </li>
            </ul>

          </div>

        </div>

      </div>

      <div className='pt-4 pb-6 lg:text-md text-center font-medium text-amber-600 border-t-[2px] border-amber-500 lg:w-[70%] w-[90%] mx-auto'>
        <p> &copy; 2025 Nature Care Services - All Rights Reserved | Designed by Allan Corker |</p>
      </div>

    </div>
  )
}

export default Footer