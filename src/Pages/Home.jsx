import React from 'react'
import Footer from '../Components/Footer'
import { FaHandshake } from 'react-icons/fa'
import { FaArrowTrendUp, FaUserCheck } from 'react-icons/fa6'
import hero1 from '../assets/hero.jpeg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <div className="relative w-full h-[80vh]">
 <img 
      src={hero1} 
      alt="hero image" 
      className="object-cover w-full h-full"
    />
  
  
  
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center md:px-6 bg-opacity-50">
      <h1 className="text-4xl sm:text-6xl font-bold p-1 bg-primaryyellow">
        Nature Care  Services.
      </h1>
      <h1 className="hidden md:block text-4xl sm:text-6xl font-bold ">housing stabilization services</h1>

      
      <button className="mt-6 bg-primaryyellow text-white py-3 px-6 rounded-lg text-lg hover:opacity-90  hover:bg-green-400 transition-all">
        <Link to="/gettingstarted">Get Started</Link>
      </button>
    </div>
  </div>
  
       
        {/* Body Section */}
        <div className='py-10'>

          <h1 className='text-center lg:text-4xl text-4xl font-bold text-primaryyellow'>Our Committments</h1>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-6 px-[2em] gap-4 md:px-[4em] mx-auto py-10'>

            {/* Div 1 */}
            <div className='hover:scale-105 border border-gray-300 rounded-2xl p-6 hover:shadow-md hover:border-t-2 hover:border-gray-300 hover:shadow-gray-400  duration-500 ease-in-out cursor-progress'>

              <FaUserCheck className='text-white size-28 mx-auto rounded-full bg-primaryyellow  p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>Client Centered Approach</h2>
              <p className='text-center font-medium'>Our services are designed around you, ensuring that your goals and preferences are always at the forefront of our care.</p>

            </div>

            {/* Div 2 */}
            <div className='hover:scale-105 border border-gray-300 rounded-2xl p-6 hover:shadow-md hover:border-t-2 hover:border-gray-300 hover:shadow-gray-400  duration-500 ease-in-out cursor-progress'>

              <FaHandshake className='text-white size-28 mx-auto rotate-[-20deg] bg-primaryyellow rounded-full  p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>Reliable Support</h2>
              <p className='text-center font-medium'>We strive to be a consistent source of assistance, offering dependable and accessible support whenever you need it.</p>

            </div>

            {/* Div 3 */}
            <div className='hover:scale-105 border border-gray-300 rounded-2xl p-6 hover:shadow-md hover:border-t-2 hover:border-gray-300 hover:shadow-gray-400  duration-500 ease-in-out cursor-progress'>

              <FaArrowTrendUp className='text-white size-28 mx-auto rounded-full bg-primaryyellow  p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow'>Continuous Improvement</h2>
              <p className='text-center font-medium'>We are committed to evolving our services through feedback and innovation, ensuring high-quality care that adapts to your changing needs.</p>

            </div>

          </div>

        </div>

        {/* Footer Section */}
        

    </div>
  )
}

export default Home