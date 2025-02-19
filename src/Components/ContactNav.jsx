import React, {useState} from 'react'
import { FaBars} from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const ContactNav = () => {

    
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

        <div className='lg:flex justify-between lg:px-20 px-10 mx-auto pt-10 top-0 left-0 right-0 relative bg-amber-100'>
        
            {/* Logo image div */}
            <div className='size-36 text-center'>
                <a href="/">
                <h2 className='text-2xl font-bold text-yellow-600 bg-amber-100 px-4 py-1 w-[200px] hover:scale-110 duration-300 ease-in-out'>Nature Care <br /> Services</h2>
                </a>
            </div>

            {/* Nav links div */}

            <div className='right-12 top-32 absolute lg:hidden'>
                { openMenu ? (<FaX onClick={toggleMenu} className='size-6 text-amber-600 cursor-pointer hover:text-amber-400 hover:size-7 duration-300 ease-in-out lg:hidden'/>) : (<FaBars onClick={toggleMenu} className='size-6 text-amber-600 cursor-pointer hover:text-amber-400 hover:size-7 duration-300 ease-in-out lg:hidden'/>)
                }
            </div>

            <div className='items-center pt-4'>
                <ul className={`${ openMenu ? 'block' : 'hidden'} lg:flex lg:gap-5 text-[18px] font-semibold lg:w-full w-[40%] mx-auto transition-all duration-500 ease-in-out`}>
                    <li onClick={() => handleTabs(1)} className={`${tab === 1 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-700'} cursor-pointer w-[60px] hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/">Home</Link></li>
                    <li onClick={() => handleTabs(2)} className={`${tab === 2 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-700'} cursor-pointer w-[60px] hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/about">About</Link></li>
                    <li onClick={() => handleTabs(3)} className={`${tab === 3 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-700'} cursor-pointer  w-[140px] hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/gettingstarted">Getting Started</Link></li>
                    <li onClick={() => handleTabs(4)} className={`${tab === 4 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-700'} cursor-pointer  w-[80px] hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/services">Service</Link>s</li>
                    <li onClick={() => handleTabs(5)} className={`${tab === 5 ? 'text-yellow-300 border-b-[1px] px-1' : 'text-amber-700'} cursor-pointer w-[70px] pb-4 hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/contact">Contact</Link></li>
                </ul>

            </div>

            {/* Small screen navbar */}
            {/* <div className='items-center pt-2'>

                <ul className='flex flex-col text-left w-[50%] mx-auto gap-5 text-[18px] font-semibold'>
                    <li onClick={() => handleTabs(1)} className={`${tab === 1 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-700'} cursor-pointer w-[60px] hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/">Home</Link></li>
                    <li onClick={() => handleTabs(2)} className={`${tab === 2 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-700'} cursor-pointer w-[60px] hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/about">About</Link></li>
                    <li onClick={() => handleTabs(3)} className={`${tab === 3 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-700'} cursor-pointer w-[140px] hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/gettingstarted">Getting Started</Link></li>
                    <li onClick={() => handleTabs(4)} className={`${tab === 4 ? 'text-yellow-600 border-b-[1px] px-1' : 'text-yellow-700'} cursor-pointer w-[80px] hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/services">Service</Link>s</li>
                    <li onClick={() => handleTabs(5)} className={`${tab === 5 ? 'text-yellow-300 border-b-[1px] px-1' : 'text-amber-700'} cursor-pointer w-[75px] mb-4 hover:text-yellow-500 hover:border-b-[1px] hover:py-0 hover:px-1 hover:rounded-sm duration-300 ease-in-out`}><Link to="/contact">Contact</Link></li>
                </ul>

            </div> */}

        </div>

    </div>
  )
}

export default ContactNav