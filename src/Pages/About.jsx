import React from 'react'
import Footer from '../Components/Footer'
import { FaBuffer, FaLightbulb } from 'react-icons/fa'
import AboutNav from '../Components/AboutNav'
import { FaBinoculars } from 'react-icons/fa6'

function About() {
  return (
    <div>

      {/* Navbar Section */}
      <AboutNav/>

      {/* Body */}
      <div className='w-[80%] mx-auto py-10'>

        <h2 className='lg:text-5xl text-4xl text-center underline font-bold text-amber-700 pb-20'>About Us</h2>

        {/* About Section / Div */}
        <div className='border-t-[0.2px] border-amber-300 rounded-md shadow-md shadow-amber-300 p-10 mb-6'>

          <div className='lg:flex items-center'>

            <div className='text-amber-400 justify-self-center lg:border-r border-gray-400 lg:h-38 h-24'>
              <FaLightbulb className='lg:size-32 size-20 lg:pr-4'/>
            </div>
            
            <div className='lg:p-6'>
              <h2 className='lg:text-3xl text-xl font-bold text-amber-600 lg:p-4'>About Nature Care Services</h2>
              <p className='lg:text-[18px] text-[16px] font-medium italic text-gray-700 text-left'>Nature Care is a dedicated provider of House Stabilization Services (HSS), supporting individuals and families in achieving stable and secure living environments. Our experienced team works closely with clients to address housing challenges, offering tailored solutions that empower individuals to regain control of their lives.</p>
            </div>
            
          </div>

        </div>

        {/* Mission Section / Div */}
        <div>

          <div className='border-t-[0.5px] border-amber-300 rounded-md shadow-md shadow-amber-300 p-10 mb-6'>

            <div className='lg:flex items-center'>

              <div className='text-amber-300 justify-self-center lg:h-38 lg:hidden'>
                <FaBuffer className='lg:size-32 size-24 lg:pl-4'/>
              </div>
              
              <div className='lg:p-6'>
                <h2 className='lg:text-3xl text-2xl font-bold text-amber-600 lg:p-4'>Our Mission</h2>
                <p className='lg:text-[18px] text-[16px] font-medium italic text-gray-700 text-left'>We focus on providing personalized, holistic house stabilization services that promote long-term stability and independence. We aim to empower individuals by connecting them with essential resources, fostering personal growth, and ensuring they have the tools to thrive in a stable home environment.</p>
              </div>
              
              <div className='text-amber-300 border-l border-gray-400 h-38 lg:flex hidden'>
                <FaBuffer className='size-32 pl-4'/>
              </div>
              
            </div>

          </div>

        </div>

        {/* Vision section / Div */}
        <div>

          <div className='border-t-[0.2px] border-amber-300 rounded-md shadow-md shadow-amber-300 p-10 mb-6'>

            <div className='lg:flex items-center'>

              <div className='text-amber-300 justify-self-center lg:border-r lg:border-gray-400 lg:h-38'>
                <FaBinoculars className='lg:size-32 size-20 lg:pr-4'/>
              </div>
              
              <div className='lg:p-6'>
                <h2 className='lg:text-3xl text-2xl font-bold text-amber-600 lg:p-4'>Our Vision</h2>
                <p className='lg:text-[18px] text-[16px] font-medium italic text-gray-700 text-left'>Our vision is to build a community where everyone has access to safe, secure, and stable housing, with resources and support necessary to live with dignity and independence.</p>
              </div>
              
            </div>

          </div>

        </div>

      </div>

      {/* Footer section */}
      <Footer/>

    </div>
  )
}

export default About