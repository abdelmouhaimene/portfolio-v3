import React from 'react'
import Image from 'next/image'
import {packsType} from '@repo/types'
const PricingCard = async ({packs}:{packs:packsType.Packs}) => {
    const tasks: string[] = await fetch(`http://localhost:3001/packs/tasks/${packs.id}`).then(res => res.json());
  return (
    <div className='bg-white rounded-4xl md:p-6 p-4  font-work-sans'>
        <div className='flex-between'>
            <div className='flex flex-col justify-start items-start'>
                <p className='text-2xl font-bold text-black'>{packs.name}</p>
                <p className='text-gradient md:text-5xl text-4xl font-bold'>{packs.plus ? '+' : '' } ${packs.price}</p>
            </div>
            {packs.image && <Image src={packs.image} alt={packs.name} height={100} width={100} />}
        </div>
        {packs.oldprice && <p className='line-through text-xl font-medium text-black'>${packs.oldprice}</p>}
        <p className='mt-2 text-lg font-bold text-black'>{packs.subtitle}</p>
        <div className='bg-gray-300 py-4 ps-8 pe-4 rounded-2xl my-4 h-52 overflow-y-auto '>
            <ul className='list-disc'>
                {tasks.map((offer,index)=>(
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