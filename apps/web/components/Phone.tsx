import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
const Phone = async () => {
  const personalData = await fetch('http://localhost:3001/personal-data').then(res => res.json());
  const phoneNumber = personalData[0].phone
  return (
    <Link href={`tel:${phoneNumber}`} className='flex-between gap-x-2 link-button'>
        <FaPhoneAlt className='md:text-2xl text-lg animate-bounce'/>
        <p className='font-work-sans font-medium md:text-lg text-sm '>
            {phoneNumber}
        </p>
    </Link>
  )
}

export default Phone