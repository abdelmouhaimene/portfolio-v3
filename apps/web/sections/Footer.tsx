import React from 'react'
import UpperFooter from '../components/UpperFooter'
import DownFooter from '../components/DownFooter'
import Link from 'next/link'
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='section-container'>
        <UpperFooter />
        <DownFooter />
        <div className='flex-between flex-col md:flex-row'>
            <p>
                All Rights Reserved {currentYear} - Comapany Name.
            </p>
            <div className='flex-between  gap-x-2'>
                <Link className='link-hover-gradient' href='/'>
                    Privacy Policy  
                </Link>
                |
                <Link className='link-hover-gradient' href='/'>
                    Terms & Conditions
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer