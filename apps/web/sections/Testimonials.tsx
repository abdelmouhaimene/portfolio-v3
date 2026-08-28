import TestimonialsCaroussel from '../components/TestimonialsCaroussel'
import React from 'react'

const Testimonials = () => {
    return (
        <div className='section-container'>
            <div className='w-full flex-center gap-x-2 font-semibold text-lg'>
                <hr className='w-8  animate-gradient'/> Testimonials <hr className='w-8 animate-gradient'/>
            </div>
            <div className='mt-6 font-work-sans flex-center font-black lg:text-8xl md:text-6xl text-4xl text-center'>
                Our valuable success <br /> clients story
            </div>
            <div className='lg:p-10 md:p-2 p-1'>
                <TestimonialsCaroussel />
            </div>
        </div>
    )
}

export default Testimonials