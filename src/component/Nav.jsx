import React from 'react'

const Nav = () => {
  return (
    <div className='p-3 flex justify-between items-center bg-black text-white font-medium'>
      <div>
        Roshan 
      </div>

        <ul className='flex gap-8 cursor-pointer items-center'>
            <a className='hover:underline' href="#about"><li>About me</li></a>
            <a className='hover:underline' href="#skills"><li>Skills</li></a>
            <a className='hover:underline' href="#projects"><li>Projects</li></a>
            <li className='px-3 py-1 text-black bg-white rounded-full font-bold'>Contact Me</li>
        </ul>
    </div>
  )
}

export default Nav
