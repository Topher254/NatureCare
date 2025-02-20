import React from 'react'
import GetStartedNav from '../Components/GetStartedNav'
import Footer from '../Components/Footer'
import { FaHandshakeAngle, FaHouse, FaLayerGroup, FaSpaceAwesome, FaSpaghettiMonsterFlying, FaUserGroup } from 'react-icons/fa6'
import { FaChartLine, FaCheckCircle, FaCheckSquare, FaComment, FaFileAlt, FaInternetExplorer } from 'react-icons/fa'

const GettingStarted = () => {
  return (
    <div>
      {/* Navbar Section */}
      <GetStartedNav/>

      {/* Body Section */}
      <div>
        <h2 className='text-center text-4xl font-bold text-primaryyellow py-1'>
          Getting Started
        </h2>

     
        <div className='mx-auto w-[80%] m-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
          
          {/* Overview Div */}
          <div className=' rounded-2xl p-6 shadow-md  hover:scale-105 duration-500 ease-in-out'>
            <h2 className='text-3xl font-semibold text-amber-600 py-6'>Overview</h2>
            <div className='flex gap-2 items-center py-2'>
              <FaHouse className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Supporting stable, independent living for individuals and families.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaHandshakeAngle className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Assisting with housing navigation and removing barriers.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaUserGroup className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Coordinating resources for long-term stability and security.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaLayerGroup className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Developing personalized care plans for each client.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaComment className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Facilitating access to essential community resources.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaSpaceAwesome className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Fostering a supportive, compassionate approach to care.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaFileAlt className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Regular follow-ups to ensure evolving needs are met.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaInternetExplorer className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Offering guidance in accessing social and mental health services.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaSpaghettiMonsterFlying className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Empowering clients to develop skills for independent living.
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaChartLine className='text-yellow-400' size={20}/>
              <p className='font-medium italic text-gray-600'>
                Tracking progress and adapting services to maximize outcomes.
              </p>
            </div>
          </div>

          {/* Eligibility Div */}
          <div className='rounded-2xl p-6 shadow-md  hover:scale-105 duration-500 ease-in-out'>
            <h2 className='text-3xl font-semibold text-amber-600 py-6'>Eligibility Requirements</h2>
            <div className='py-2'>
              <p className='font-medium italic text-gray-600'>
                To qualify for House Stabilization Services (HSS), individuals must meet the following criteria:
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaCheckSquare className='text-yellow-400' size={16}/>
              <p className='font-medium italic text-gray-600'>Be enrolled in Medical Assistance (MA)</p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaCheckSquare className='text-yellow-400' size={16}/>
              <p className='font-medium italic text-gray-600'>Be at least 18 years old</p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaCheckSquare className='text-yellow-400' size={16}/>
              <p className='font-medium italic text-gray-600'>Have a documented disability or disabling condition</p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaCheckSquare className='text-yellow-400' size={16}/>
              <p className='font-medium italic text-gray-600'>
                Require assistance with communication, mobility, decision-making, or behavior management due to the disability
              </p>
            </div>
            <div className='flex gap-2 items-center py-2'>
              <FaCheckSquare className='text-yellow-400' size={16}/>
              <p className='font-medium italic text-gray-600'>
                Face housing instability (homelessness, transitioning from an institution, or at risk of institutionalization)
              </p>
            </div>
            <div className='py-2'>
              <p className='font-medium italic text-gray-600'>
                Individuals can self-refer or be supported by a provider or case manager to access HSS services. Once eligibility is determined, a healthcare professional must complete the required documentation and submit it to our office. Our team will guide you through the next steps in the process.
              </p>
            </div>
          </div>

        </div>
      </div>

     
    </div>
  )
}

export default GettingStarted
