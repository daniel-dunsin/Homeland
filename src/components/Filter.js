import React from 'react'
import { useGlobalContext } from './context';
import { FaSearch } from 'react-icons/fa'
import LocationFilter from './LocationFilter';
import PropertyFilter from './PropertyFilter';
import PriceFilter from './PriceFilter';



const Filter = () => {
  const { filterProperties } = useGlobalContext();
  return <section className='max-w-[1170px] mx-auto relative lg:mt-0 mt-[20px]'>
    <div className='w-full md:p-8 p-4 lg:shadow-1 rounded-md flex lg:flex-row flex-col justify-between md:gap-4 gap-3 md:backdrop-blur md:relative md:-top-2'>
      <LocationFilter />

      <PropertyFilter />

      <PriceFilter />

      {/* search button */}
      <button className='flex-[25%] bg-violet-700 hover:bg-violet-800 transition shadow-sm rounded-md px-3 py-5 flex justify-center items-center text-[22px] text-white' onClick={filterProperties}>
        <i><FaSearch /></i>
      </button>
    </div>
  </section>
}

export default Filter