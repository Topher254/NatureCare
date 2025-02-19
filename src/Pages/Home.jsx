import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FaHandshake } from 'react-icons/fa'
import { FaArrowTrendUp, FaUserCheck } from 'react-icons/fa6'

function Home() {
  return (
    <div>

        {/* Navbar section */}
        <Navbar/>

        {/* Body Section */}
        <div className='py-10'>

          <h1 className='text-center lg:text-4xl text-3xl font-bold text-amber-500'>Our Committments</h1>
          
          <div className='lg:flex space-x-5 w-[80%] mx-auto py-10'>

            {/* Div 1 */}
            <div className='hover:scale-105 rounded-lg p-6 hover:shadow-md hover:shadow-yellow-300  duration-500 ease-in-out cursor-progress'>

              <FaUserCheck className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-yellow-500 py-4'>Client Centerd Approach</h2>
              <p className='text-center font-medium'>Our services are designed around you, ensuring that your goals and preferences are always at the forefront of our care.</p>

            </div>

            {/* Div 2 */}
            <div className='hover:scale-105 rounded-lg p-6 hover:shadow-md hover:shadow-yellow-300  duration-500 ease-in-out cursor-progress'>

              <FaHandshake className='text-amber-600 size-28 mx-auto rotate-[-20deg] rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-yellow-500 py-4'>Reliable Support</h2>
              <p className='text-center font-medium'>We strive to be a consistent source of assistance, offering dependable and accessible support whenever you need it.</p>

            </div>

            {/* Div 3 */}
            <div className='hover:scale-105 rounded-lg p-6 hover:shadow-md hover:shadow-yellow-300  duration-500 ease-in-out cursor-progress'>

              <FaArrowTrendUp className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-yellow-500 py-4'>Continuous Improvement</h2>
              <p className='text-center font-medium'>We are committed to evolving our services through feedback and innovation, ensuring high-quality care that adapts to your changing needs.</p>

            </div>

          </div>

        </div>

        {/* Footer Section */}
        <Footer/>

    </div>
  )
}

export default Home