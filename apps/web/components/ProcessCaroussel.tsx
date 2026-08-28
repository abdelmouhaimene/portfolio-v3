'use client'
import React,{useState,useEffect} from 'react'
import { processData } from '../data'
import ProcessStep from '../components/ProcessStep'

const ProcessCaroussel = () => {
    const [selectedStep,setSelectedStep]= useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedStep((prevState) => (prevState === processData.length - 1) ? 0 : prevState + 1 ); // Update the state
        }, 5000); 
            return () => clearInterval(interval);
      }, []);
  return (
    <div className={`section-container grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-y-2`}>
        {processData.map((step,index) => (
            <div  key={index} className='flex justify-center items-start'>
                <ProcessStep step={step} selectedStep={selectedStep} index={index} lenght={processData.length}/>
            </div>
        ))}
    </div>
  )
}

export default ProcessCaroussel