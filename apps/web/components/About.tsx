import React from 'react'
import ActionButtons from './ActionButtons'
import SkillsTypeAnimation from './SkillsTypeAnimation'


const About = async () => {
   const skills = await fetch('http://localhost:3001/skills').then(res => res.json());
   const personalData = await fetch('http://localhost:3001/personal-data').then(res => res.json());
  return (
    <div className='section-container '>
        <p className='font-work-sans font-extrabold text-6xl mb-4'>
        Let’s explore the
        Art of SOFTWARE
        </p>
        <p className='font-work-sans font-medium text-3xl mb-6'>
          Hello, I am <span className='font-bold'>
          {personalData[0].name},
          <br/>
          </span> Expert on <span className='font-bold'> 
            <SkillsTypeAnimation skills={skills} />
          </span>
        </p>
        <p className='font-work-sans font-medium text-xl mb-6'> I help businesses turn their ideas into professional, scalable, and maintainable applications.</p>
        <div className='min-w-3/4'>
          <ActionButtons />
        </div>
    </div>
  )
}

export default About