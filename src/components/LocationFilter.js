import React, { useState } from 'react'
import { RiMapPinLine } from 'react-icons/ri';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useGlobalContext } from './context';

const LocationFilter = () => {
    const [openDetails, setOpenDetails] = useState(false);

    const {
        countries,
        country,
        setCountry,
    } = useGlobalContext();
    return <article className='lg:basis-[25%] border-[1.5px] border-gray-200 shadow-sm rounded-md px-3 py-5 relative'
        onClick={() => {
            setOpenDetails((prev) => !prev);
        }}
    >

        <header
            className='flex flex-row justify-between items-center cursor-pointer'>
            <div className='flex flex-row gap-x-2 items-center'>
                <i className='text-[22px] text-violet-600'><RiMapPinLine /></i> {country}
            </div>
            <i>{
                openDetails ? <FaChevronUp className='text-violet-600' /> : <FaChevronDown className='text-violet-600' />
            } </i>
        </header>


        {
            openDetails && <div className='absolute z-10 top-[110%] left-0 bg-white border-[1.5px] border-gray-300 w-[100%] rounded-md'>
                {
                    countries.map((country, index) => (
                        <p key={index} className='p-[10px] cursor-pointer transition hover:text-violet-900' onClick={() => {
                            setCountry(country);
                            // setOpenDetails(false);
                        }}>{country}</p>
                    ))
                }
            </div>
        }
    </article >
}

export default LocationFilter