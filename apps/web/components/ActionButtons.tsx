import React from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ActionButtons = () => {
  return (
    <div className='flex-between  gap-x-4'>
        <button className='action-button-bg'>
            Live chat <IoChatbubbleEllipsesOutline className='font-bold'/>
        </button>
        <button className='action-button'>
            Request a quote
        </button>
    </div>
  )
}

export default ActionButtons