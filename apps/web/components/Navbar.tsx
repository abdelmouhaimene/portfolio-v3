"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Phone from './Phone';
import Image from 'next/image';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 70) {
            setIsScrolled(true); // Scrolled past 100px
          } else {
            setIsScrolled(false); // Not scrolled past 100px
          }
        };
    
        // Attach the event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <div className={ isScrolled ? 'bg-light-dark z-50 fixed md:px-20 sm:px-10 px-4 py-4 w-full' : 'z-50 fixed md:px-20 sm:px-10 py-10 w-full'}>
            <div className='flex-between  md:flex-row flex-col gap-y-2'>
              <div>
                <Image src='/luna.png' alt='logo' height={70} width={70} />
              </div>
                <div className='flex-between gap-x-10 sm:flex-row flex-col gap-y-2'>
                    <Phone />
                    <button className='action-button'>
                        Request a quote
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar