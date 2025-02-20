import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ContactHeroImg from '../assets/hero5.jpg'
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

               {/* Navbar section */}
                <div className='lg:flex lg:justify-between lg:space-x-40 lg:px-20 mx-auto lg:py-10 top-0 left-0 right-0 absolute '>
        
                    {/* Logo image div */}
                    <div className='size-36 w-[100%]'>
                        <a href="/">
                        <h2 className='text-2xl font-bold text-yellow-600 bg-amber-100 px-4 py-[40px] lg:py-2 lg:w-[200px] w-[100%] hover:text-yellow-700 duration-300 ease-in-out text-center'>Nature Care <br /> Services</h2>
                        </a>
                    </div>
        
                    {/* Nav links div */}
        
                    <div className='right-24 sm:right-48 md:right-48 top-[110px] absolute lg:hidden'>
                        { openMenu ? (<FaX onClick={toggleMenu} className='size-6 text-amber-400 cursor-pointer hover:text-amber-700 hover:size-7 duration-300 ease-in-out lg:hidden'/>) : (<FaBars onClick={toggleMenu} className='size-6 text-amber-400 cursor-pointer hover:text-amber-700 hover:size-7 duration-700 ease-in-out lg:hidden'/>)
                        }
                    </div>
        
                    <div className='items-center lg:pt-4 w-[100%] align-top '>
                        <ul className={` ${ openMenu ? 'max-h-[500px]' : 'max-h-[0px] lg:max-h-full bg-transparent '} lg:flex lg:gap-5 lg:text-[18px] text-[16px] font-semibold lg:pt-0 bg-amber-100 lg:bg-transparent w-[100%] pl-4 lg:pl-0 pb-4 text-orange-400 justify-items-center transition-all duration-500 ease-in-out overflow-hidden`}>
                            <li onClick={() => handleTabs(1)} className={`${tab === 1 ? 'text-yellow-600 border-b-[1px] px-1' : 'lg:text-yellow-300'} w-[60px]  cursor-pointer pt-4 lg:pt-0 hover:text-amber-700 hover:border-b-[1px] hover:px-1 hover:rounded-sm duration-500 ease-in-out`}><Link to="/">Home</Link></li>
                            <li onClick={() => handleTabs(2)} className={`${tab === 2 ? 'text-yellow-600 border-b-[1px] px-1' : 'lg:text-yellow-300'} w-[60px] cursor-pointer hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/about">About</Link></li>
                            <li onClick={() => handleTabs(3)} className={`${tab === 3 ? 'text-yellow-600 border-b-[1px] px-1' : 'lg:text-yellow-300'} w-[140px] cursor-pointer hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 ml-[76px] lg:ml-0 hover:rounded-sm duration-300 ease-in-out`}><Link to="/gettingstarted">Getting Started</Link></li>
                            <li onClick={() => handleTabs(4)} className={`${tab === 4 ? 'text-yellow-600 border-b-[1px] px-1' : 'lg:text-yellow-300'} w-[70px] cursor-pointer ml-2 lg:ml-0 hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/services">Service</Link>s</li>
                            <li onClick={() => handleTabs(5)} className={`${tab === 5 ? 'text-yellow-600 border-b-[1px] px-1' : 'lg:text-yellow-300'} w-[70px] cursor-pointer ml-2 lg:ml-0 hover:text-amber-700 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/contact">Contact</Link></li>
                        </ul>

                    </div>

                </div>

                {/* (Hero) Profile Section */}
                <div className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center backdrop-blur-sm w-[100%] py-5 space-y-4 text-white'>
                    <h1 className='font-extrabold lg:text-4xl text-2xl lg:py-4 py-2'>Nature Care Services</h1>
                    <p className='font-bold lg:text-2xl text-[18px] italic '>Where Care Meets Stability.</p>
                    <button className='border-none rounded-full mt-4 lg:py-4 py-2 lg:px-8 px-4 lg:text-[16px] font-medium cursor-pointer bg-amber-400 text-gray-600 hover:bg-gray-600 hover:text-amber-500 duration-300 ease-in-out'>
                        <Link to="/">Welcome</Link>
                    </button>
                </div>
            
            </div>
        
        </div>

    </div>
  )
}

export default ServicesNav