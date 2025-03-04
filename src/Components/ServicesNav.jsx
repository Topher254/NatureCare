import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ContactHeroImg from '../assets/real2.jpeg'
import { FaBars} from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const ServicesNav = () => {

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
                <img src={ContactHeroImg} alt="Hero Image" className='w-full h-[770px] object-cover object-center blur-[1px]' />

             

                {/* (Hero) Profile Section */}
                <div className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center backdrop-blur-sm w-[100%] py-5 space-y-4 text-white'>
                    <h1 className='font-extrabold lg:text-6xl text-4xl lg:py-4 py-2'>Nature Care Services</h1>
                    <p className=' lg:text-2xl text-[18px] italic '>Where Care Meets Stability.</p>
                    <button className='border-none rounded-lg mt-4 lg:py-4 py-3 lg:px-8 px-6 lg:text-[16px] font-medium cursor-pointer bg-primaryyellow text-white hover:bg-green-400 hover:opacity-90 duration-300 ease-in-out'>
                        <Link to="/">Welcome</Link>
                    </button>
                </div>
            
            </div>
        
        </div>

    </div>
  )
}

export default ServicesNav