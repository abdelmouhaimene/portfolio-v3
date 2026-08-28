import React from 'react'
import { pricingPackType } from '../dataTypes'
import Image from 'next/image'
const PricingCard = ({pricingPack}:{pricingPack:pricingPackType}) => {
  return (
    <div className='bg-white rounded-4xl md:p-6 p-4  font-work-sans'>
        <div className='flex-between'>
            <div className='flex flex-col justify-start items-start'>
                <p className='text-2xl font-bold text-black'>{pricingPack.name}</p>
                <p className='text-gradient md:text-5xl text-4xl font-bold'>${pricingPack.price}</p>
            </div>
            <Image src={pricingPack.image} alt={pricingPack.name} height={100} width={100} />
        </div>
        <p className='line-through text-xl font-medium text-black'>${pricingPack.oldPrice}</p>
        <p className='mt-2 text-lg font-bold text-black'>{pricingPack.descreption}</p>
        <div className='bg-gray-300 py-4 ps-8 pe-4 rounded-2xl my-4 h-52 overflow-y-auto '>
            <ul className='list-disc'>
                {pricingPack.offers.map((offer,index)=>(
                    <li className=' font-medium text-black/90' key={index}>
                        <p>{offer}</p>
                    </li>
                ))}
            </ul>
        </div>
        <button className='action-button-order '>
            Order now
        </button>
    </div>
  )
}

export default PricingCard