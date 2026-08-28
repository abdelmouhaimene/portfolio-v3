import React from 'react'
import ServicesTab from '../components/ServicesTab' 
const Services = () => {
  return (
    <div className='section-container mt-10'>
        <div className='w-full flex-center gap-x-2 font-semibold text-lg'>
            <hr className='w-8  animate-gradient'/> Our services <hr className='w-8 animate-gradient'/>
        </div>
        <div className='mt-6 font-work-sans flex-center font-black md:text-6xl text-4xl text-center'>
            ANIMATIONS THAT CREATE <br /> THE RIGHT BUZZ
        </div>
        <div>
            <ServicesTab />
        </div>
    </div>
  )
}

export default Services