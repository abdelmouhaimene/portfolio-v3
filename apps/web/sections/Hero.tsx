import React from 'react'
import About from '../components/About'
import Image from 'next/image'
import PhoneCall from '../components/PhoneCall'
const Hero = () => {
  return (
    <div className='flex-between flex-responsive w-full relative lg:gap-y-2 gap-y-0 p-10'>
        <div className='md:w-1/2 w-full section-container z-10 '>
            <About />
        </div>
        <div className='md:w-1/2 w-full py-10 lg:px-20 md:px-10 px-4 z-10 ' >
            <PhoneCall />
        </div>
        <div className='animate-fly brightness-70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 z-0 text-black'>
            <Image  src='/luna.png' width={500} height={500} alt='spacecraft' className='z-0'/>
        </div>
    </div>
  )
}

export default Hero