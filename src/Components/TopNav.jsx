import React from 'react'
import { BiPhoneIncoming } from 'react-icons/bi'
import { BsEnvelopeArrowDown, BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const TopNav = () => {
  return (
    <div className="bg-gray-100 py-2 w-full px-4">
      <div className="px-[2em] sm:px-[6em] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
          >
          <BsTwitterX size={20} />
            
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>

        <div className="flex items-center space-x-6">
          {/* Call Us Section */}
          <div className="flex cursor-pointer border-l pl-1 border-primaryyellow">
            <button className=" text-primaryyellow cursor-pointer px-3 py-1 rounded-md  flex justify-center items-center  transition">
            <BiPhoneIncoming className='mr-2'/> <p className='text-gray-700'>+1 (612) 448-5501</p>
            </button>
          </div>


            <div className=" cursor-pointer text-gray-700 border-l pl-1 border-primaryyellow flex justify-center items-center text-right">
             
             <BsEnvelopeArrowDown className='mr-2 ml-3 text-primaryyellow'/> <p>naturecareservicesllc@gmail.com</p>
            </div>

         
        </div>
      </div>
    </div>
  )
}

export default TopNav
