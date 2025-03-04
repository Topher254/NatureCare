import React from 'react'
import { BiPhoneIncoming } from 'react-icons/bi'
import { BsEnvelopeArrowDown, BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const TopNav = () => {
  return (
    <div className="bg-gray-100 py-2 w-full px-4">
      <div className="px-[2em] sm:px-[6em] mx-auto flex items-center justify-between">
         

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
  )
}

export default TopNav
