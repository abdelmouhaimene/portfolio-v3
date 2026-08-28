import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className='section-container'>
        <div className='signup-form-container p-4'>
            <p className='font-work-sans font-bold text-3xl mb-2'>
                We are here to help!
            </p>
            <p className='font-work-sans font-medium text-xl mb-2'>
                Sign up Now To Avail <span className='animate-signal'>70%</span> Discount
            </p>
            <form className='w-full mb-2'>
                <input className='text-input' type="text" placeholder='Full name' />
                <input className='text-input' type="email" placeholder='Email' />
                <input className='text-input' type="phone" placeholder='Phone number' />
                <textarea className='text-input' placeholder='Project' />
                <input className='action-button-bg' type="submit" name="submit" id="" />
            </form>
            <p className='font-work-sans font-semibold'>Any Confusion? <Link className='text-brightyellow' href='/'> Why not discuss your idea? </Link> </p>
        </div>
    </div>
  )
}

export default SignUp