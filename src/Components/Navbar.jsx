import React from 'react'
import { Link } from 'react-router-dom'
import HeroImg from '../assets/hero3.jpg'

const Navbar = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className=''>
        <img src={HeroImg} alt="Hero Image" className='w-full h-[770px] object-cover object-top blur-[1px]' />

        {/* Navbar section */}
        <div className='flex justify-between px-20 mx-auto py-10 top-0 left-0 right-0 absolute'>

          {/* Logo image div */}
          <div className='size-36 '>
              <a href="/">
              
              <h2 className='text-2xl font-bold text-yellow-600 bg-amber-100 px-4 py-1 w-[200px] hover:scale-110 duration-300 ease-in-out'>Nature Care <br /> Services</h2>
              </a>
          </div>

          {/* Nav links div */}
          <div className='items-center text-yellow-500 pt-4'>
              <ul className='flex gap-5 text-[18px] font-semibold'>
                  <li className='cursor-pointer hover:text-yellow-300 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out'><Link to="/">Home</Link></li>
                  <li className='cursor-pointer hover:text-yellow-300 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out'><Link to="/about">About</Link></li>
                  <li className='cursor-pointer hover:text-yellow-300 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out'><Link to="/gettingstarted">Getting Started</Link></li>
                  <li className='cursor-pointer hover:text-yellow-300 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out'><Link to="/services">Service</Link>s</li>
                  <li className='cursor-pointer hover:text-yellow-300 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out'><Link to="/contact">Contact</Link></li>
              </ul>

          </div>

        </div>

        {/* (Hero) Profile Section */}
        <div className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-950 text-center'>
          <h1 className='font-bold text-4xl py-4'>Welcome to Nature Care Services</h1>
          <p className='font-medium text-2xl italic text-gray-950'>Where Care Meets Stability.</p>
          <button className='border-none rounded-full mt-4 py-4 px-8 text-[16px] font-medium cursor-pointer bg-amber-400 text-gray-600 hover:bg-gray-600 hover:text-amber-500 duration-300 ease-in-out'>
            <a href="/">Get Started</a>
          </button>
        </div>
        
      </div>

    </div>
  )
}

export default Navbar