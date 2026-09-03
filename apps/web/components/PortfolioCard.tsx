import React from 'react'
import Image from 'next/image'
import { projectsType } from '@repo/types' 
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const PortfolioCard = ({project} : {project : projectsType.projects}) => {
  return (
    <div className='relative w-full h-full cursor-grabbing group  '>
    {/* Image as background */}
    {(project.Image && project.Image != '' && project.name) && <Image
      className='z-0 object-cover w-full h-full rounded-xl'
      src={`/projects/${project.Image}`}
      alt={project.name}
    //   layout='fill' // Use 'fill' to make the image cover the entire div
      height={500}
      width={500}
    />}
  
    {/* Text container positioned at the bottom left */}
        <div className='rounded-xl w-full h-full text-center flex-center flex-col bottom-0 left-0 absolute z-10 font-work-sans p-4 bg-white/70  opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <p className='font-extrabold text-lg text-black'>{project.name}</p>
              {project.link && (
                  <Link href={project.link} target='_blank' className='flex-center gap-2 text-sm font-medium text-gray-700 hover:text-brightyellow transition-colors duration-300'>
                      <FaEye className='text-black'/> View Project
                  </Link>
              )}
              {project.github && (
                  <Link href={project.github} target='_blank' className='flex-center gap-2 text-sm font-medium text-gray-700 hover:text-brightyellow transition-colors duration-300'>
                      <FaGithub className='text-black'/> View Code
                  </Link>
              )}
            {/* <p className='font-medium text-sm text-gray-700'>{project.description}</p>
            <p className='font-medium text-sm text-gray-700'>{project.service}</p>
            <p className='font-medium text-sm text-gray-700'>{project.technologies.join(', ')}</p>
            <p className='font-medium text-sm text-gray-700'>{project.year}</p>
            <p className='font-medium text-sm text-gray-700'>{project.id}</p>    */}

        </div>
  </div>
  )
}

export default PortfolioCard