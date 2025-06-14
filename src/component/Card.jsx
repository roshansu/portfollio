import React from 'react'
import Tech from './Tech'

const Card = ({desc, pic, tech, live, code, title}) => {
  return (
      <div  className='p-2 lg:w-[30%]  transition-all duration-200 hover:scale-105 cursor-pointer bg-gray-200 border rounded-md border-gray-400 shadow-sm '>
        <img className='rounded-tr-md rounded-tl-md w-full h-[300px] object-cover border border-gray-300' src={pic} alt="" />
        <div className='flex flex-wrap items-center mt-2 gap-3'>
            {
                tech.map(item=>(
                    <Tech val={item} key={item}/>
                ))
            }
        </div>
        <p className='text-black font-bold text-lg mt-2'>{title}</p>
        <p className='mt-3 text-gray-700 font-medium'>{desc}</p>
        <div className='flex mt-4 items-center text-white text-lg font-medium gap-6'>
            <a href={live} className='px-4 py-2 bg-black  rounded-md transition duration-200 hover:scale-105'>
                live
                <i class="fa-solid ml-2 fa-arrow-up-right-from-square"></i>
            </a>
            <a href={code} className='px-4 py-2 bg-black  rounded-md transition duration-200 hover:scale-105'>
                Code
                <i class="fa-brands ml-2 fa-github"></i>
            </a>
        </div>
      </div>
  )
}

export default Card
