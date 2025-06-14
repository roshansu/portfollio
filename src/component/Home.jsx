import React from 'react'
import me from '../assets/sde.png'

const Home = () => {
  return (
    <div className='flex'>
      <div className='lg:w-[50%] w-screen gap-6 flex-col flex items-center justify-center h-screen bg-[#D7D7D7]'>
            <div>
                <p className='lg:text-[40px] text-[30px] mb-6 font-bold'>Hi, i am</p>
                <div>
                    <p className='lg:text-[80px] text-[60px] font-bold'>Roshan</p>
                    <p className='lg:text-[25px] text-[17px] text-[#909090] font-bold'>Software developer</p>
                </div>
            </div>
            <div className='flex gap-8'>
                <a target='_blank' href="https://github.com/roshansu" className='shadow-md transition-all ease-in-out duration-200 hover:scale-105 text-3xl shadow-white bg-[#C4C4C4] text-center p-2 rounded-sm'>
                    <i class="fa-brands fa-github"></i>
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/roshan-kumar-960184291/" className='shadow-md transition-all ease-in-out duration-200 hover:scale-105 text-3xl shadow-white bg-[#C4C4C4] text-center p-2 rounded-sm'>
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a target='_blank' href="https://leetcode.com/u/roshan0bca/" className='shadow-md transition-all ease-in-out duration-200 hover:scale-105  shadow-white bg-[#C4C4C4] flex items-center justify-center p-2 rounded-sm'>
                    <img width="28" height="28" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo"/>
                </a>
            </div>

            <a className='px-6 py-3 bg-white text-black mt-6 font-bold border transition duration-200 hover:scale-105 text-lg rounded-md shadow-md ' href="https://docs.google.com/document/d/158LxN1nDMT9BnLSTPGBFpSl8x2dXltQ2/edit?tab=t.0" target='_blank'>View resume</a>
      </div>

      <div className='w-[50%] hidden h-screen lg:flex items-center justify-center p-8 bg-[#D7D7D7]'>
        <img className='w-[80%]' src={me} alt="" />
      </div>
    </div>
  )
}

export default Home
