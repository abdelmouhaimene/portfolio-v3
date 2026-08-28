"use client"
import React,{useState } from 'react'
import { servicesData } from '../data'
import Image from 'next/image'
import ActionButtons from './ActionButtons'
const ServicesTab = () => {
    const [selectedService,setSelectedService] = useState(servicesData[0])
  return (
    <div>
        <div className='flex flex-wrap gap-x-4 gap-y-2 px-2 py-4'>
            {servicesData.map((service, index) => (
                <button
                onClick={() => setSelectedService(service)}
                className='action-button flex-grow flex-shrink basis-auto'
                key={index}
                >
                {service.name}
                </button>
            ))}
        </div>
        <div className='flex-center px-6 py-10 '>
            <Image className='service-img' src={selectedService.image} alt='serivce image' height={400} width={400}/>
        </div>
        <div>
            <p className='font-work-sans font-bold text-2xl text-center mb-4'>
                {selectedService.name}
            </p>
            <p className='service-desc'>
                {selectedService.descreption1}
            </p>
            <p className='service-desc'>
                {selectedService.descreption2}
            </p>
            <p className='service-desc'>
                {selectedService.descreption3}
            </p>
        </div>
        <div className='flex-center'>
            <ActionButtons />
        </div>
    </div>
  )
}

export default ServicesTab