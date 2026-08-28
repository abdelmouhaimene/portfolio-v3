import React from 'react'
import { contactData } from '../data'
import Link from 'next/link'
import Image from 'next/image'
const DownFooter = () => {
  return (
    <div className='px-10 md:py-20 py-10'>
        <div className='flex-col gap-y-4 flex-center'>
            <button className=''>
                <p className='contact-button animate-signal'>
                    LETS CONTACT
                </p>
            </button>
            <div className='flex-center gap-x-6'>
                {
                    contactData.map((contact,index) => (
                        <Link key={index} href={contact.link} className='ligne-hover'>
                            <Image className='animate-scall' src={contact.icon} alt={contact.platform} height={70} width={70} />
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default DownFooter