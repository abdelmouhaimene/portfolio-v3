import React from 'react'
import ActionButtons from './ActionButtons'
const About = () => {
  return (
    <div className='section-container '>
        <p className='font-work-sans font-extrabold text-4xl mb-4'>
        Let’s explore the
        Art of STORYTELLING
        </p>
        <p className='font-work-sans font-medium text-lg mb-6'>
        Get the Best <span className='font-bold'>2D, 3D Video Animation Service</span> for your <span className='font-bold'> product explainer video </span>product explainer video or for advertising, feature films, television and special venues.
        </p>
        <div className='min-w-3/4'>
          <ActionButtons />
        </div>

    </div>
  )
}

export default About