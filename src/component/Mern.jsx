import React from 'react'
import stud from '../assets/stud.png'
import sydny from '../assets/sydny.png'
import Card from './Card'
import sh from '../assets/sh.png'

const Mern = () => {
 const data = [
        {
          pic:sh,
          desc:" A platform for Shobhit University CS students to connect with mentors, get AI-powered guidance, and grow through verified learning and networking opportunities.",
          title:"ByteUP",
          tech:["MERN", "TailwindCss", "Gen Ai"],
          live:"www.byteup.online",
          code:"https://github.com/roshansu"
        },
        {
            pic: stud,
            desc: "Developed a campus connection app where students can connect with others within their campus and they can share opinion to others.",
            title:"StudIN",
            tech: ["MERN", "TailwindCss"],
            live: "www.studin.in",
            code: "https://github.com/roshansu",
        },

        {
            pic: sydny,
            desc: "Developed a website where user can explore the latest events from sydney events.",
            title:"Sydney events",
            tech: ["MERN", "TailwindCss"],
            live: "https://scrapper-iptq.onrender.com/",
            code: "https://github.com/roshansu/scrapper",
        },

    ]
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {
        data.map((item, ind)=>(
            <Card pic={item.pic} key={ind} title={item.title} desc={item.desc} tech={item.tech} live={item.live} code={item.code}/>
        ))
      }
    </div>
  )

}

export default Mern
