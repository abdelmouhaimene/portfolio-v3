import React from 'react'
import BiometricBadge from '../components/BiometricBadge'
import SignUp from '../components/SignUp'
const Quote = () => {
  return (
    <div id='quote' className='section-container mt-10'>
      <p className='font-work-sans font-black lg:text-8xl md:text-6xl text-4xl '>
        Start with us
      </p>
      <hr className='mt-4 w-full h-1 text-white/70'/>
      <div className='mt-6 font-work-sans flex-center font-black md:text-6xl text-4xl text-center'>
          Build the software that builds your business.
      </div>
      <div className='flex-between flex-responsive relative lg:gap-y-2 gap-y-0 p-10'>
        <div className='md:w-1/2 w-full section-container z-10 '>
          <BiometricBadge/>
        </div>
        <div className='md:w-1/2 w-full py-10 lg:px-20 md:px-10  z-10 ' >
          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default Quote