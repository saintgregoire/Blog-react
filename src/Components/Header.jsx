import React from 'react'
import logo from './../assets/Images/logo.png'
import { CiLinkedin } from "react-icons/ci"

function Header() {
  return (
    <header className='flex justify-between items-center py-8'>
      <img src={logo} alt="logo"  className='w-[180px]' />
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About us</li>
        <li className='hover:font-bold cursor-pointer'>Contact us</li>
      </ul>
      <a href='https://www.linkedin.com/in/maksym-voznichka/' target='_blank' className='bg-red-500 rounded-full text-white flex items-center py-2 px-3 hover:scale-110 transition-all duration-100 ease-in-out'>Subscribe <CiLinkedin className='ml-2 text-[20px]' /></a>
    </header>
  )
}

export default Header