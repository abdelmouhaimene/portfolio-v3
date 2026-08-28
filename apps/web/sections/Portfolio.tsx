"use client"
import ProjectsTab from '../components/ProjectsTab'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='section-container'>
        <p className='font-work-sans font-black lg:text-8xl md:text-6xl text-4xl '>
            Portfolio
        </p>
        <hr className='mt-4 w-full h-1 text-white/70'/>
        <div className='mt-4'>
            <ProjectsTab />
        </div>
    </div>
  )
}

export default Portfolio