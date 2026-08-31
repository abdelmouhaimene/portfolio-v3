import React from 'react'
import ServicesTab from '../components/ServicesTab' 
const Services = async () => {
      const servicesData = await fetch('http://localhost:3001/services').then(res => res.json());
  return (
    <div className='section-container mt-10'>
        <div className='w-full flex-center gap-x-2 font-semibold text-lg'>
            <hr className='w-8  animate-gradient'/> Our services <hr className='w-8 animate-gradient'/>
        </div>
        <div className='mt-6 font-work-sans flex-center font-black md:text-6xl text-4xl text-center'>
            Build the software that <br/>builds your business.
        </div>
        <div>
            <ServicesTab servicesData={servicesData}/>
        </div>
    </div>
  )
}

export default Services