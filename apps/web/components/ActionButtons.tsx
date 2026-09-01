import React from 'react'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Link from 'next/link';

const ActionButtons = () => {

  return (
    <div className='flex-between  gap-x-4'>
        <button className='action-button-bg'>
            Live chat <IoChatbubbleEllipsesOutline className='font-bold'/>
        </button>
        <button  className='action-button'>
            <Link href='#quote'>Request a quote</Link>
        </button>
    </div>
  )
}

export default ActionButtons