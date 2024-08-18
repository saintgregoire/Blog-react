import React, { useState } from 'react'
import banner from './../assets/Images/banner.jpg'
import { IoIosSearch } from "react-icons/io"

function Search() {

  const tags=[
    {
      id:1,
      name: 'All'
    },
    {
      id:2,
      name:'React'
    },
    {
      id:3,
      name:'React Native'
    },
    {
      id:4,
      name:'Angular'
    },
    {
      id:5,
      name:'UI/UX'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex justify-center mt-8 flex-col px-[70px] md:px-[100px]'>
      <img src={banner} alt="banner" className='rounded-2xl h-[400px] object-cover' />
      <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <IoIosSearch className='text-[20px] text-gray-400' />
        <input type="text" placeholder='Search' className='outline-none ml-2'/>
      </div>

      <div className='mt-5'>
        <ul className='flex gap-10 justify-center'>
          {tags.map((item, index) =>(
            <li key={item.id}  className={`${index===activeIndex?'bg-red-500 text-white': null} px-4 py-2 rounded-sm md:rounded-full cursor-pointer hover:scale-110 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out`} onClick={()=>setActiveIndex(index)}>{item.name}</li>
          ))}
        </ul>
        
      </div>
    </div>
  )
}

export default Search