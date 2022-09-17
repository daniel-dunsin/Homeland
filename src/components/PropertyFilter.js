import React, { useState } from 'react'
import { RiHome2Line } from 'react-icons/ri';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useGlobalContext } from './context';
const PropertyFilter = () => {
    const [openDetails, setOpenDetails] = useState(false);
    const {
        properties,
        setProperty,
        property,
    } = useGlobalContext();
    return <article className='lg:basis-[25%] border-[1.5px] border-gray-200 shadow-sm rounded-md px-3 py-5 relative'
        onClick={() => {
            setOpenDetails((prev) => !prev);
        }}
    >
        <header className='flex flex-row justify-between items-center cursor-pointer'>
            <div className='flex flex-row gap-x-2 items-center'>
                <i className='text-[22px] text-violet-600'><RiHome2Line /></i> {property}
            </div>
            <i>{
                openDetails ? <FaChevronUp className='text-violet-600' /> : <FaChevronDown className='text-violet-600' />
            } </i>
        </header>


        {openDetails && <div className='absolute z-10 top-[110%] left-0 bg-white border-[1.5px] border-gray-300 w-[100%] rounded-md'>
            {
                properties.map((property, index) => (
                    <p key={index} className='p-[10px] cursor-pointer hover:text-violet-900' onClick={() => {
                        setProperty(property);
                        // setOpenDetails(false);
                    }}>{property}</p>
                ))
            }
        </div>}
    </article>
}

export default PropertyFilter