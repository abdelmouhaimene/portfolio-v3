"use client"
import React,{useState } from 'react'
import PortoflioCarousel from './PortoflioCarousel'
import { servicesType,projectsType } from '@repo/types' 
const ProjectsTab = ({services,projects}: {services: servicesType.services[], projects: projectsType.projects[]}) => {
    const [selectedTab,setSelectedTab] = useState<servicesType.services>(services[0]!)

    return (
        <div>
            <div className='flex flex-wrap gap-x-4 gap-y-2 p-2'>
                {services.map((tab,index) => (
                    <button onClick={() => setSelectedTab(tab)} className={selectedTab.name === tab.name ? 'text-brightyellow font-work-sans font-semibold cursor-pointer grow shrink basis-auto'  : 'link-button font-work-sans font-semibold grow shrink basis-auto'} key={index}>{tab.name}</button>
                ))}
            </div>
            <div>
                <PortoflioCarousel selectedTab={selectedTab} projects={projects}/>
            </div>
        </div>
    )
}

export default ProjectsTab
