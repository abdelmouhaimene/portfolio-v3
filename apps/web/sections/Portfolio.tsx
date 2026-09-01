import ProjectsTab from '../components/ProjectsTab'
import React from 'react'

const Portfolio = async () => {
  const servicesData = await fetch('http://localhost:3001/services').then(res => res.json());
  const projectsData = await fetch('http://localhost:3001/projects').then(res => res.json());
  return (
    <div className='section-container'>
        <p className='font-work-sans font-black lg:text-8xl md:text-6xl text-4xl '>
            Portfolio
        </p>
        <hr className='mt-4 w-full h-1 text-white/70'/>
        <div className='mt-4'>
            <ProjectsTab services={servicesData} projects={projectsData} />
        </div>
    </div>
  )
}

export default Portfolio