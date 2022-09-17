import React from 'react'
import {BiBed, BiArea,BiBath} from 'react-icons/bi';
const House = ({id, type, image, country, address, bedrooms, bathrooms, surface, price}) => {
  return <article className='col-span-1 max-w-[352px] p-4 shadow-md hover:shadow-lg transition rounded-[20px] rounded-tl-[90px] mx-auto'>
    <div className='mb-3'>
      <img src={image} className='w-full' alt="" />
    </div>
    <main className='flex flex-col gap-3'>
      <div className='flex gap-x-2'>
        <p className='px-3 rounded-full bg-green-500 text-white'>{type}</p>
        <p className='px-3 rounded-full bg-violet-500 text-white'>{country}</p>
      </div>

      <h3>{address}</h3>

      <div className='flex flex-row gap-x-4'>
        <article className='flex flex-row gap-x-2 items-center text-violet-500'>
          <i><BiBed /></i>
          {bedrooms}
        </article>
        <article className='flex flex-row gap-x-2 items-center text-violet-500'>
          <i><BiBath /></i>
          {bathrooms}
        </article>
        <article className='flex flex-row gap-x-2 items-center text-violet-500'>
          <i><BiArea /></i>
          {surface}
        </article>
      </div>

      <p className='font-bold text-[18px] text-violet-500'>$ {price}</p>
    </main>
  </article>
}

export default House