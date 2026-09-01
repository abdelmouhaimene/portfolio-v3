"use client"
import React,{useState } from 'react'
import Image from 'next/image'
import ActionButtons from './ActionButtons'
import { servicesType } from '@repo/types'
import { splitStringIntoSentences } from '@repo/tools'

const ServicesTab = ({servicesData} : {servicesData : servicesType.services[]}) => {
    const [selectedService,setSelectedService] = useState<servicesType.services>(servicesData[0]!)
    return (
        <div>
            <div className='flex flex-wrap gap-x-4 gap-y-2 px-2 py-4'>
                {servicesData.map((service, index) => (
                    <button
                    onClick={() => setSelectedService(service)}
                    className='action-button-small grow shrink basis-auto'
                    key={index}
                    >
                    {service.name}
                    </button>
                ))}
            </div>
            <div className='flex-center px-6 py-10 '>
                <Image className='service-img' src={`/services/${selectedService.image}`} alt='serivce image' height={400} width={400}/>
            </div>
            <div>
                <p className='font-work-sans font-bold text-2xl text-center mb-4'>
                    {selectedService.name}
                </p>
                <p className='service-desc'>
                    {splitStringIntoSentences(selectedService.description)[0]}
                </p>
                <p className='service-desc'>
                    {splitStringIntoSentences(selectedService.description)[1]}
                </p>
            </div>
            <div className='flex-center'>
                <ActionButtons />
            </div>
        </div>
    )
}

export default ServicesTab