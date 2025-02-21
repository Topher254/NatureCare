import React from 'react'
import Footer from '../Components/Footer'
import { FaBuffer, FaLightbulb } from 'react-icons/fa'
import AboutNav from '../Components/AboutNav'
import { FaBinoculars } from 'react-icons/fa6'

function About() {
  return (
    <div className=''>

      {/* Navbar Section */}
      <AboutNav/>

      {/* Body */}
      <div className='w-[80%] mx-auto py-10'>

        <h2 className='lg:text-5xl text-4xl text-center underline font-bold text-primaryyellow pb-20'>About Us</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
        {/* About Section / Div */}
        <div className='border border-gray-200   rounded-2xl shadow-md  p-2 flex justify-center flex-col mb-6'>

          <div className='flex items-center  flex-col'>

            <div className='text-primaryyellow justify-self-center   lg:h-38 h-24'>
              <FaLightbulb className='lg:size-28 text-green-500 size-20 lg:pr-4'/>
            </div>
            
            <div className='lg:p-6 p-4'>
              <h2 className='lg:text-3xl text-xl font-bold text-primaryyellow lg:p-4'>About Us</h2>
              <p className='lg:text-[18px] text-[16px] font-medium italic text-gray-700 text-left'>Nature Care is a dedicated provider of House Stabilization Services (HSS), supporting individuals and families in achieving stable and secure living environments. Our experienced team works closely with clients to address housing challenges, offering tailored solutions that empower individuals to regain control of their lives.</p>
            </div>
            
          </div>

        </div>

        {/* Mission Section / Div */}
        <div>

          <div className='border border-gray-200 rounded-2xl shadow-md  p-10 mb-6'>

            <div className='flex flex-col justify-center items-center'>

            <div className=' border-gray-400 h-38 flex'>
            <FaBuffer className='size-32 pl-4 text-blue-500'/>
          </div>
              
              <div className='lg:p-6 '>
                <h2 className='lg:text-3xl text-2xl font-bold text-primaryyellow lg:p-4'>Our Mission</h2>
                <p className='lg:text-[18px] text-[16px] font-medium italic text-gray-700 text-left'>We focus on providing personalized, holistic house stabilization services that promote long-term stability and independence. We aim to empower individuals by connecting them with essential resources, fostering personal growth, and ensuring they have the tools to thrive in a stable home environment.</p>
              </div>
              
             
            </div>

          </div>

        </div>

        {/* Vision section / Div */}
        <div>

          <div className='border border-gray-200  rounded-2xl shadow-md  p-10 mb-6'>

            <div className='flex flex-col items-center'>

              <div className=' justify-self-center   lg:h-38'>
                <FaBinoculars className='lg:size-32 size-20 lg:pr-4 text-indigo-500'/>
              </div>
              
              <div className='lg:p-6'>
                <h2 className='lg:text-3xl text-2xl font-bold text-primaryyellow lg:p-4'>Our Vision</h2>
                <p className='lg:text-[18px] text-[16px] font-medium italic text-gray-700 text-left'>Our vision is to build a community where everyone has access to safe, secure, and stable housing, with resources and support necessary to live with dignity and independence.</p>
              </div>
              
            </div>
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default About