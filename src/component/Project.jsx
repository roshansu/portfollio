import React from 'react'
import { useState } from 'react'
import All from './All'
import Html from './Html'
import Js from './Js'
import Mern from './Mern'
import Reactjs from './React'
import Genai from './Genai'

const Project = () => {
    const [type, setType] = useState('all')
  return (
    <div className=' lg:px-16  lg:pb-16 bg-[#D7D7D7]'>
      <div className='flex justify-center'>
        <div className='lg:px-12 px-6 w-fit lg:text-3xl text-xl font-bold lg:py-4 py-3 border-6 border-black'>Projects</div>
      </div>

      <div className='flex flex-wrap lg:gap-16 gap-2 p-2 lg:py-4  items-center bg-black text-white lg:font-medium mt-12 justify-center lg:text-lg '>
        <button onClick={()=>setType('all')} className={`${type==='all'?' border-white':' border-black'} pb-2 border-b-2 `}>All</button>
        <button onClick={()=>setType('html')} className={`${type==='html'?' border-white':' border-black'} pb-2 border-b-2 `}>HTML/CSS</button>
        <button onClick={()=>setType('js')} className={`${type==='js'?' border-white':' border-black'} pb-2 border-b-2 `}>JAVASCRIPT</button>
        <button onClick={()=>setType('react')} className={`${type==='react'?' border-white':' border-black'} pb-2 border-b-2 `}>REACT.JS</button>
        <button onClick={()=>setType('mern')} className={`${type==='mern'?' border-white':' border-black'} pb-2 border-b-2 `}>MERN</button>
        <button onClick={()=>setType('genai')} className={`${type==='genai'?' border-white':' border-black'} pb-2 border-b-2 `}>Gen Ai</button>
      </div>
      <div className='mt-8 p-4 '>
        {
            type==='all'?<All/>:''
        }
        {
            type==='html'?<Html/>:''
        }
        {
            type==='js'?<Js/>:''
        }
        {
          type==="react"?<Reactjs/>:''
        }
        {
            type==='mern'?<Mern/>:''
        }
        {
            type==='genai'?<Genai/>:''
        }
      </div>
    </div>
  )
}

export default Project
