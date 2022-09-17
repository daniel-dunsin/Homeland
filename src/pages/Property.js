import React from 'react'
import { useParams } from 'react-router-dom';
import { BiBed, BiArea, BiBath } from 'react-icons/bi';
import { housesData } from '../data';
const Property = () => {
  const { id } = useParams();
  // get the product
  const property = housesData.find(house => house.id == id);

  const { type, name, description, imageLg, country, address, bedrooms, bathrooms, surface, year, price, agent } = property
  return <section className='mt-[50px] max-w-[1250px] mx-auto p-6'>
    <header className='w-full flex lg:flex-row flex-col gap-4 justify-between mb-5 lg:items-center'>
      <div>
        <h1 className='bold text-[24px]'>{name}</h1>
        <h3 className='text-gray-800'>{address}</h3>
      </div>
      <div className='flex flex-row gap-x-3'>
        <p className='px-3 rounded-full bg-green-500 text-white cursor-pointer'>{type}</p>
        <p className='px-3 rounded-full bg-violet-500 text-white cursor-pointer'>{country}</p>
      </div>

      <h1 className='text-[24px] text-violet-700 bold'>$ {price}</h1>
    </header>


    <div className="w-full flex lg:flex-row flex-col gap-8 items-start">
      <div className='max-w-[768px] flex flex-col gap-y-8'>

        <div>
          <img src={imageLg} alt={name} />
        </div>

        <div className='flex flex-row gap-x-3'>
          <article className='flex flex-row gap-x-2 text-violet-600 text-[18px] items-center cursor-pointer'>
            <i><BiBed /></i>
            {bedrooms}
          </article>
          <article className='flex flex-row gap-x-2 text-violet-600 text-[18px] items-center cursor-pointer'>
            <i><BiBath /></i>
            {bathrooms}
          </article>
          <article className='flex flex-row gap-x-2 text-violet-600 text-[18px] items-center cursor-pointer'>
            <i><BiArea /></i>
            {surface}
          </article>
        </div>

        <p className='text-[15px]'>{description}</p>
      </div>

      <aside className='border rounded-md max-h-fit p-[20px] w-full'>
        <div className='flex flex-row gap-x-4 items-center'>
          <img src={agent.image} className='md:w-auto md:h-auto h-[64px] w-[64px]' alt="" />
          <div className='flex flex-col'>
            <p className='bold text-[20px]'>{agent.name}</p>
            <p className='text-[14px] md:text-[16px] text-violet-600'>View Mailings</p>
          </div>
        </div>


        <form className='mt-5 flex flex-col space-y-4'>
          <input type="text" placeholder='Name *' className='text-[16px] p-4 outline-none border border-1 focus:border-violet-800 rounded-md'/>
          <input type="email" placeholder='Email*' className='text-[16px] p-4 outline-none border border-1 focus:border-violet-800 rounded-md'/>
          <input type="number" placeholder='Phone *' className='text-[16px] p-4 outline-none border border-1 focus:border-violet-800 rounded-md'/>
          <textarea placeholder='Message' className='text-[16px] p-4 outline-none border border-1 focus:border-violet-800 rounded-md resize-none h-[150px]'></textarea>
        </form>

        <div className='mt-4 flex flex-row gap-x-2'>
          <button className='basis-1/2 py-4 bg-violet-700 transition hover:bg-violet-800 text-white rounded-md text-[14px] md:text-[16px]'>Send Message</button>
          <button className='basis-1/2 py-4 text-violet-700 transition hover:text-violet-800 border border-violet-600 hover:border-violet-800 rounded-md text-[14px] md:text-[16px]'>Call</button>
        </div>
      </aside>

    </div>
  </section>
}

export default Property