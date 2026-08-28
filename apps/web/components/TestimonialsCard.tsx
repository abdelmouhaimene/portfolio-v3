
import React from 'react'
import { testimonialType } from '../dataTypes'
import Image from 'next/image'
const TestimonialsCard = ({ testimonial }: { testimonial: testimonialType }) => {
  return (
    <div className='p-8 lg:p-10 md:p-4  border-2 border-brightyellow rounded-2xl font-work-sans shadow-md shadow-brightyellow lg:h-90 md:h-100 h-110'>
      <Image src={testimonial.companyLogo} alt={testimonial.companyName} height={100} width={100} />
     <div className='lg:h-40 md:h-50 h-60'>
      <p className='my-6 sm:text-sm text-lg'>
        {testimonial.review}
      </p>
     </div>
      <div>
        <p className='sm:text-lg text-xl font-bold'>
          {testimonial.author.name}
        </p>
        <p className=''>
          {testimonial.author.position}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard