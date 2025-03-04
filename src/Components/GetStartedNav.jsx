import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroGetStarted from '../assets/mine.jpeg'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const GetStartedNav = () => {

    // Function to handle the menu
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)

    }

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

           

                {/* (Hero) Profile Section */}
                <div className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-500/30 text-primaryyellow text-center w-full  backdrop-blur-[5px] py-5 '>
                    <h1 className='font-bold lg:text-6xl text-white   text-4xl lg:py-4 py-2'>Get started with Nature Care Services</h1>
                    <p className=' lg:text-3xl text-white  py-2 text-xl italic '>Where Care Meets Stability.</p>
                    
                </div>
            
            </div>

        </div>

    </div>
  )
}

export default GetStartedNav