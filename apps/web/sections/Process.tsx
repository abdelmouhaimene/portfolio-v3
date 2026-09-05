import ProcessCaroussel from '../components/ProcessCaroussel'
import React from 'react'

const Process = () => {
  return (
    <div className='section-container'>
         <div className='w-full flex-center gap-x-2 font-semibold text-lg'>
            <hr className='w-8  animate-gradient'/> Process <hr className='w-8 animate-gradient'/>
        </div>
        <div className='mt-6 font-work-sans flex-center font-black md:text-6xl text-4xl text-center'>
            Matching Your Business <br /> Needs Effectively
        </div>
        <div className='mt-2 font-work-sans font-light text-sm text-center text-gray-200'>
            From Ideas to Impact,<br /> A clear, collaborative process designed to turn <span className='font-bold'>your business challenges</span> nto powerful, reliable software solutions.
        </div>
        <ProcessCaroussel />
    </div>
  )
}

export default Process