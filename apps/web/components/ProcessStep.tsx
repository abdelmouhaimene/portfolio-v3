
import React from 'react'
import { processStepType } from '../dataTypes'
import Image from 'next/image'
import { TbArrowBigRightLines } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
const ProcessStep = ({step,selectedStep,index,lenght} : {step : processStepType,selectedStep:number,index : number , lenght : number}) => {
    const inTime = (fullClassName : string) => {
        return index === selectedStep ? fullClassName : fullClassName+' brightness-60'
    }
    return (
        <div className={inTime('flex-col flex-center gap-y-2')}>
            <div className='rounded-full flex-center bg-white section-container md:h-32 md:w-32 h-26 w-26'>
                <Image src={step.image} alt={step.title} height={50} width={50} />
            </div>
            <div className={inTime('flex-center gap-x-3 ')}>
                <p className='font-work-sans font-bold'>
                    {step.title}
                </p>
                { 
                    lenght-1 !== index 
                    ? <TbArrowBigRightLines className={index === selectedStep ? 'text-xl animate-bounceX' : 'text-xl'}/>
                    : <AiOutlineLike className={index === selectedStep ? 'text-xl animate-bounce' : 'text-xl'}/>
                }
            </div>
            <div className='px-4'>
                <p className='hidden sm:block font-work-sans text-sm font-light text-center'>
                    {step.descreption}
                </p>
            </div>
        </div>
    )
}

export default ProcessStep