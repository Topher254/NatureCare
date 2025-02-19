import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroGetStarted from '../assets/hero6.jpg'

const GetStartedNav = () => {

    const [tab, setTab] = useState(true)

  // Function to hanlde the tabs on active session
  const handleTabs = (tab) => {
    setTab(tab)
  }


  return (
    <div>

        <div>

            {/* Hero Section */}
            <div className=''>
                <img src={HeroGetStarted} alt="Hero Image" className='w-full h-[770px] object-cover object-center blur-[1px]' />

                {/* Navbar section */}
                <div className='lg:flex justify-between lg:px-20 px-10 mx-auto py-10 top-0 left-0 right-0 absolute'>

                    {/* Logo image div */}
                    <div className='size-36 text-center'>
                        <a href="/">
                        <h2 className='text-2xl font-bold text-yellow-600 bg-amber-100 px-4 py-1 w-[200px] hover:scale-110 duration-300 ease-in-out'>Nature Care <br /> Services</h2>
                        </a>
                    </div>

                    {/* Nav links div */}
                    <div className='items-center pt-4'>
                        <ul className='flex gap-5 text-[18px] font-semibold'>
                            <li onClick={() => handleTabs(1)} className={`${tab === 1 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-300'} cursor-pointer hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/">Home</Link></li>
                            <li onClick={() => handleTabs(2)} className={`${tab === 2 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-300'} cursor-pointer hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/about">About</Link></li>
                            <li onClick={() => handleTabs(3)} className={`${tab === 3 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-300'} cursor-pointer hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/gettingstarted">Getting Started</Link></li>
                            <li onClick={() => handleTabs(4)} className={`${tab === 4 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-300'} cursor-pointer hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/services">Service</Link>s</li>
                            <li onClick={() => handleTabs(5)} className={`${tab === 5 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-300'} cursor-pointer hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/contact">Contact</Link></li>
                        </ul>

                    </div>

                </div>

                {/* (Hero) Profile Section */}
                <div className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-200 text-center'>
                    <h1 className='font-bold lg:text-4xl text-2xl lg:py-4 py-2'>Welcome to Nature Care Services</h1>
                    <p className='font-medium lg:text-2xl text-[18px] italic '>Where Care Meets Stability.</p>
                    
                </div>
            
            </div>

        </div>

    </div>
  )
}

export default GetStartedNav