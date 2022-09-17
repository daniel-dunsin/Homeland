import React from 'react'
import banner from '../assets/img/house-banner.png';
const Header = () => {
  return <header className='max-w-[1250px] ml-auto mt-[80px] mb-0 pb-0'>
    <div className='flex md:flex-row flex-col gap-8 md:text-left text-center items-center justify-between'>
      <div className='flex-1 flex flex-col gap-y-4'>
        <h1 className='md:text-[60px] md:leading-[72px] text-[26px] leading-[32px] bold capitalize'><span className='text-violet-600'>Rent</span> your dream house with us.</h1>
        <p className='text-gray-800 max-w-[501px] text-[15px] md:text-[16px]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ad, magni earum illum molestias perspiciatis commodi magnam accusantium pariatur iusto.
        </p>
      </div>
      <div className='flex-1 hidden md:flex justify-center items-end'>
        <img src={banner} alt="banner" />
      </div>
    </div>
  </header>
}

export default Header