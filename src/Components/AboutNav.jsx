import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AboutHeroImg from '../assets/mine3.avif'
import { FaX } from 'react-icons/fa6'
import { FaBars } from 'react-icons/fa'

const AboutNav = () => {

  // Function to handle the menu
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)

    }

 

  return (
    <div className=''>

      {/* Hero Section */}
      <div className=''>
        <img src={AboutHeroImg} alt="Hero Image" className='w-full h-[770px] object-cover object-top blur-[1px]' />

        {/* (Hero) Profile Section */}
        <div className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-[100%]'>
          <h1 className='font-extrabold md:text-6xl text-2xl py-4'>About Nature Care Services</h1>
          <p className='font-bold md:text-4xl text-[18px] italic '>Where Care Meets Stability.</p>
          <button className='border-none rounded-lg mt-4 lg:py-3 lg:px-8 py-3 px-6 text-[16px] font-medium cursor-pointer bg-primaryyellow hover:bg-green-400  hover:opacity-90  duration-300 ease-in-out'>
            <Link to="/services">Our Services</Link>
          </button>
        </div>
        
      </div>

    </div>
  )
}

export default AboutNav
