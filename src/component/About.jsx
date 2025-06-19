import React from 'react'
import sep from '../assets/sep.png'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import ts from '../assets/ts.png'
import node from '../assets/node.svg'
import git from '../assets/git.svg'
import rct from '../assets/react.svg'
import mongo from '../assets/mongo.svg'
import tail from '../assets/tail.svg'
import dsa from '../assets/dsa.png'
import blck from '../assets/blck.svg'
import c from '../assets/c.svg'
import cpp from '../assets/cpp.svg'

const About = () => {
  return (
    <div style={{background:"radial-gradient(circle,rgba(0, 0, 0, 0) 0%, rgba(1, 1, 1, 0.16) 100%)"}}
    className=' flex items-center justify-center flex-col gap-20 p-2 lg:p-32'>
        <div className='lg:px-12 px-6 w-fit lg:text-3xl text-xl font-bold lg:py-4 py-3 border-6 border-black'>About me</div>
      <p className='text-[#050505] text-start '>
        I am a Software developer, skilled in building full-stack web applications with React.js, Node.js, Express.js, and MongoDB.
        I have strong experience in front-end development with React and back-end development with Node.js and MongoDB.
        Along with web development, I have a good foundation in C, C++, Python, DBMS, MySQL, JavaScript, Data Structures and Algorithms (DSA), and Operating Systems (OS) concepts.
        Currently, I'm also learning blockchain development to expand my full-stack skill set.
     </p>
        <div className='px-4 py-2 border-r-2 font-medium border-l-2'>Explore</div>
        <img src={sep} alt="" />

        <div className='flex flex-wrap gap-x-32 gap-y-8 justify-center'>
            <div className='lg:w-[40%]'>
                <div className='flex lg:mb-6 mb-3  items-center'>
                    <img className='relative left-8 bottom-2' src={s1} alt="" />
                    <p className='lg:text-3xl text-xl font-bold'>DESIGN</p>
                </div>
                <p>Crafting responsive, user-centric interfaces using React.js, focusing on intuitive layouts, usability, accessibility, and seamless user experiences across platforms.</p>
            </div>
            <div className='lg:w-[40%]'>
                <div className='flex lg:mb-6 mb-3   items-center'>
                    <img className='relative left-8' src={s2} alt="" />
                    <p className='lg:text-3xl text-xl font-bold'>DEVELOPMENT</p>
                </div>
                <p>Building robust full-stack applications using React, Node.js, Express, and MongoDB, integrating frontend logic with scalable backend APIs and efficient data handling.</p>
            </div>
            <div className='lg:w-[40%]'>
                <div className='flex lg:mb-6 mb-3 items-center'>
                    <img className='relative left-8' src={s3} alt="" />
                    <p className='lg:text-3xl text-xl font-bold'>MAINTENANCE</p>
                </div>
                <p>Ensuring application performance, debugging issues, refactoring code, updating dependencies, and implementing enhancements to maintain long-term stability and user satisfaction.</p>
            </div>
        </div>
        <img src={sep} alt="" />
                <div className='lg:px-12 px-6 w-fit lg:text-3xl text-xl font-bold lg:py-4 py-3 border-6 border-black'>Skills</div>

        
        <div>
            <div>
                <p className='lg:text-3xl text-xl lg:mb-8 mb-4 font-bold'>USING NOW</p>
                <div className='flex justify-center lg:gap-20 gap-6 lg:text-lg text-center flex-wrap'>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={html} alt="" />
                        <p className='mt-2'>HTML5</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={css} alt="" />
                        <p className='mt-2 '>CSS3</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={tail} alt="" />
                        <p className=' mt-2'>TAILWINDCSS</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={js} alt="" />
                        <p className=' mt-2 '>JAVASCRIPT</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={rct} alt="" />
                        <p className=' mt-2 '>REACT.JS</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={git} alt="" />
                        <p className=' mt-2 '>GIT</p>
                    </div>
                </div>
            </div>

             <div className='lg:mt-12 mt-6'>
                <p className='lg:text-3xl text-xl lg:mb-8 mb-4 font-bold'>LEARNING</p>
                <div className='flex justify-center lg:gap-20 gap-6 lg:text-lg text-center flex-wrap'>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={node} alt="" />
                        <p className='mt-2'>NODE.JS</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={mongo} alt="" />
                        <p className='mt-2 '>MONGODB</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={blck} alt="" />
                        <p className=' mt-2'>BLOCKCHAIN</p>
                    </div>
                </div>
            </div>

             <div className='lg:mt-12 mt-6'>
                <p className='lg:text-3xl text-xl lg:mb-8 mb-4 font-bold'>OTHER SKILLS</p>
                <div className='flex justify-center lg:gap-20 gap-6 lg:text-lg text-center flex-wrap'>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={c} alt="" />
                        <p className='mt-2'>C</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={cpp} alt="" />
                        <p className='mt-2 '>C++</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={dsa} alt="" />
                        <p className=' mt-2'>DSA</p>
                    </div>
                    <div className=''>
                        <img className='lg:w-[100px] w-[70px] h-[55px] lg:h-[70px]' src={ts} alt="" />
                        <p className=' mt-2'>TYPESCRIPT</p>
                    </div>
                </div>
            </div>
        </div>
        <img src={sep} alt="" />
    </div>
  )
}

export default About
