import React from 'react'
import { Link } from 'react-router-dom';
import {FaSpinner} from 'react-icons/fa'
import { useGlobalContext } from './context';
import House from './House';
const HouseList = () => {
  const { houses, openPreloader } = useGlobalContext();
  if(openPreloader){
    return <FaSpinner className='animate-spin text-violet-500 text-[22px] mx-auto mt-[80px] font-bold' />
  }
  if(houses.length === 0){
    return <h1 className='mx-auto mt-[80px] text-gray-600 text-[26px] text-center p-6'>Sorry, no property matches your requirements</h1>
  }
  return <section className='mt-[50px] max-w-[1250px] mx-auto p-6'>
    <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 justify-between items-center'>
      {
        houses.map((house, index) => (
          <Link key={index} to={`/property/${house.id}`}>
            <House {...house} />
          </Link>
        ))
      }
    </div>
  </section>
}

export default HouseList