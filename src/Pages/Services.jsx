import React from 'react'
import { Link } from 'react-router-dom'
import ServicesNav from '../Components/ServicesNav'
import Footer from '../Components/Footer'
import { FaHeartPulse, FaHouse, FaMound } from 'react-icons/fa6'
import { FaFirstAid, FaHandHoldingHeart, FaSatellite, FaShieldAlt, FaUserSecret, FaUserShield } from 'react-icons/fa'

const Services = () => {
  return (
    <div>
      {/* Navbar Section */}
      <ServicesNav/>

      {/* Body */}
      <div>
        <h2 className='text-center lg:text-4xl text-3xl font-bold text-primaryyellow py-10'>
          Our Services
        </h2>

        <div className='w-[80%] mx-auto lg:py-20 py-5 grid gap-8'>

          {/* Row 1 */}
          <div className='lg:grid lg:grid-cols-3 gap-8'>
            {/* Div 1 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaHouse className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Housing Navigation
              </h2>
              <p className='text-center font-medium'>
                Guiding clients through securing stable housing, from finding properties to handling necessary paperwork.
              </p>
            </div>

            {/* Div 2 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaMound className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Transitional Assistance
              </h2>
              <p className='text-center font-medium'>
                Supporting individuals transitioning from care facilities to independent living with essential resources.
              </p>
            </div>

            {/* Div 3 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaHeartPulse className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Health Monitoring
              </h2>
              <p className='text-center font-medium'>
                Regularly checking client health status to maintain well-being and quickly address potential health issues.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className='lg:grid lg:grid-cols-3 gap-8 lg:py-10 mt-6'>
            {/* Div 1 - Row 2 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaHandHoldingHeart className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Community Resources
              </h2>
              <p className='text-center font-medium'>
                Connecting clients to valuable community resources like food programs, job placement, and social services.
              </p>
            </div>

            {/* Div 2 - Row 2 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaUserShield className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Behavioral Support
              </h2>
              <p className='text-center font-medium'>
                Offering guidance for behavior management and emotional support to promote stable, positive living.
              </p>
            </div>

            {/* Div 3 - Row 2 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaShieldAlt className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Safety Planning
              </h2>
              <p className='text-center font-medium'>
                Creating personalized safety plans tailored to each client’s unique needs and living circumstances.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className='lg:grid lg:grid-cols-3 gap-8 lg:py-10 mt-6'>
            {/* Div 1 - Row 3 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaFirstAid className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Medical Coordination
              </h2>
              <p className='text-center font-medium'>
                Facilitating access to medical services and coordinating with healthcare providers for comprehensive care.
              </p>
            </div>

            {/* Div 2 - Row 3 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaUserSecret className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Counseling Services
              </h2>
              <p className='text-center font-medium'>
                Providing access to counseling and support groups for mental and emotional well-being.
              </p>
            </div>

            {/* Div 3 - Row 3 */}
            <div className='hover:scale-105 rounded-2xl p-6 shadow-md hover:shadow-lg duration-500 ease-in-out cursor-pointer'>
              <FaSatellite className='text-amber-600 size-28 mx-auto rounded-full bg-amber-100 p-6'/>
              <h2 className='text-center font-semibold text-2xl text-primaryyellow py-4'>
                Advocacy Support
              </h2>
              <p className='text-center font-medium'>
                Empowering clients by providing guidance in accessing legal assistance, ensuring their rights are upheld.
              </p>
            </div>
          </div>

          <div className='flex justify-center mt-8'>
            <button className='text-[18px] font-medium text-white bg-primaryyellow rounded-md px-4 py-2 hover:text-gray-600 hover:bg-amber-500 duration-300 ease-in-out cursor-pointer'>
              <Link to="/contact">Refer a Friend</Link>
            </button>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Services
