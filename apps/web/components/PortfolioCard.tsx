import React from 'react'
import Image from 'next/image'
import { projectsType } from '@repo/types' 

const PortfolioCard = ({project} : {project : projectsType.projects}) => {
  return (
    <div className='relative w-full h-full cursor-grabbing group  '>
    {/* Image as background */}
    {(project.Image && project.Image != '' && project.name) && <Image
      className='z-0 object-cover w-full h-full'
      src={`/projects/${project.Image}`}
      alt={project.name}
    //   layout='fill' // Use 'fill' to make the image cover the entire div
      height={600}
      width={600}
    />}
  
    {/* Text container positioned at the bottom left */}
        <div className='rounded-xl w-full h-full text-center flex-center flex-col bottom-0 left-0 absolute z-10 font-work-sans p-4 bg-white/70  opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <p className='font-extrabold text-lg text-gradient'>{project.name}</p>
            <p className='font-medium text-sm text-gray-700'>{project.id}</p>
        </div>
  </div>
  )
}

export default PortfolioCard