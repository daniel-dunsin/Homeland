import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
const Navbar = () => {
  return <nav className='w-full md:py-6 py-4 px-3 md:px-8 border-b-[1.5px] border-b-gray-200'>
    <div className='max-w-[1250px] mx-auto flex flex-row justify-between items-center'>
      {/* navbar-brand */}
      <Link to='/'>
        <img src={logo} alt="homeland" />
      </Link>
      <div className='flex flex-row justify-end items-center gap-x-3 text-[16px]'>
        <p className='transition hover:text-violet-900 cursor-pointer'>Log In</p>
        <button type='button' className='transition bg-violet-700 hover:bg-violet-800 text-white py-3 px-5 rounded-md'>Sign up</button>
      </div>
    </div>
  </nav>
}

export default Navbar