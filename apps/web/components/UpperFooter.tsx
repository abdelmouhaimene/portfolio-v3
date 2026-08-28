import React from 'react'
import ActionButtons from './ActionButtons'
const UpperFooter = () => {
  return (
    <div className='flex flex-col items-end md:px-10 sm:px-4 px-3'>
        <p className='font-work-sans font-bold md:text-5xl text-4xl text-end'>
            We’re Continually Racing Against <br />
            The Clock So That You Can <br />
            Stay Ahead Of The Game.
        </p>
        <div className='mt-6 sm:max-w-3/4'>
            <ActionButtons />
        </div>
    </div>
  )
}

export default UpperFooter