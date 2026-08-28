import React,{useState } from 'react'
import { portfolioData } from '../data'
import PortoflioCarousel from './PortoflioCarousel'
const ProjectsTab = () => {
    const [selectedTab,setSelectedTab] = useState(portfolioData[0])

  return (
    <div>
        <div className='flex flex-wrap gap-x-4 gap-y-2 p-2'>
            {portfolioData.map((tab,index) => (
                <button onClick={() => setSelectedTab(tab)} className={selectedTab.name === tab.name ? 'text-brightyellow font-work-sans font-semibold cursor-pointer flex-grow flex-shrink basis-auto'  : 'link-button font-work-sans font-semibold flex-grow flex-shrink basis-auto'} key={index}>{tab.name}</button>
            ))}
        </div>
        <div>
            <PortoflioCarousel selectedTab={selectedTab}/>
        </div>
    </div>
  )
}

export default ProjectsTab