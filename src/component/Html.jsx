import React from 'react'
import cdr from '../assets/cdr.png'
import digii from '../assets/digii.png'
import lnkd from '../assets/link.png'
import x from '../assets/x.png'
import Card from './Card'
import res from '../assets/res.png'

const Html = () => {
    const data = [
        {
            pic: cdr,
            desc: "Replicated the website of Coder Army (desktop view only)",
            tech: ["HTML5", "CSS"],
            title:"Coder army clone",
            live: "https://roshansu.github.io/CoderArmy-replicate/",
            code: "https://github.com/roshansu/CoderArmy-replicate",
        },

        {
            pic: digii,
            desc: "Replicated the homepage of Digiicampus (desktop view only)",
            title:"Digiicampus clone",
            tech: ["HTML5", "CSS"],
            live: "https://roshansu.github.io/digiicampus-replicate/",
            code: "https://github.com/roshansu/digiicampus-replicate",
        },

        {
            pic: lnkd,
            desc: "Replicated the homepage of Linkedin (desktop view only)",
            title:"Linkedin clone",
            tech: ["HTML5", "CSS"],
            live: "https://roshansu.github.io/linkedin-replicate/",
            code: "https://github.com/roshansu/linkedin-replicate",
        },

        {
            pic: x,
            desc: "Replicated the homepage of X(twitter) (desktop view only)",
            title:"Twitter clone",
            tech: ["HTML5", "CSS"],
            live: "https://roshansu.github.io/twitter-replicate/",
            code: "https://github.com/roshansu/twitter-replicate",
        },

        {
            pic: res,
            desc: "Developed a responsive ui which work on both mobile and desktop",
            title:"Responsive Ui",
            tech: ["HTML5", "TailwindCss"],
            live: "https://roshansu.github.io/responsiveUi/",
            code: "https://github.com/roshansu/responsiveUi",
        },
    ]
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {
        data.map((item, ind)=>(
            <Card pic={item.pic} title={item.title} key={ind} desc={item.desc} tech={item.tech} live={item.live} code={item.code}/>
        ))
      }
    </div>
  )
}

export default Html
