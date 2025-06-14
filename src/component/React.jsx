import React from 'react'
import todo from '../assets/todo.png'
import github from '../assets/github.png'
import dsav from '../assets/sort.png'
import comp from '../assets/comp.png'
import Card from './Card'
import port from '../assets/port.png'

const Reactjs = () => {

    const data =[
        {
            pic: todo,
            desc: "Developed a simple todo app.",
            title:"Todo app",
            tech: ["React.js"],
            live: "https://to0do.netlify.app/",
            code: "https://github.com/roshansu/todoapp",
        },
        {
            pic: dsav,
            desc: "Developed a sorting algorithm visualizer",
            title:"DSA visualizer",
            tech: ["React.js"],
            live: "https://dsavisualiz.netlify.app/",
            code: "https://github.com/roshansu/dsaVisualizer",
        },
         {
            pic: github,
            desc: "Developed a site where we fetch the user's data from github and display it on website.",
            title:"Github profile",
            tech: ["React.js"],
            live: "https://githubprofil.netlify.app/",
            code: "https://github.com/roshansu/githubProfile",
        },
         {
            pic: comp,
            desc: "Developed a simple complaint form.",
            title:"Complaint form",
            tech: ["React.js", "TailwindCss"],
            live: "https://complaintfor.netlify.app/",
            code: "https://github.com/roshansu/complaint-form",
        },
        {
            pic: port,
            desc: "Developed a personal portfollio website.",
            title:"Portfollio",
            tech: ["React.js", "TailwindCss"],
            live: "https://complaintfor.netlify.app/",
            code: "https://github.com/roshansu/complaint-form",
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

export default Reactjs
