import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
const Phone = () => {
  return (
    <Link href="/" className='flex-between gap-x-2 link-button'>
        <FaPhoneAlt className='md:text-2xl text-lg animate-bounce'/>
        <p className='font-work-sans font-medium md:text-lg text-sm '>
            +1-332-228-0460
        </p>
    </Link>
  )
}

export default Phone