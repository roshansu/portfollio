import React from 'react'
import Card from './Card'
import cdr from '../assets/cdr.png'
import digii from '../assets/digii.png'
import lnkd from '../assets/link.png'
import x from '../assets/x.png'
import res from '../assets/res.png'
import timer from '../assets/timer.png'
import quiz from '../assets/quiz.png'
import calc from '../assets/calc.png'
import draw from '../assets/draw.png'
import expense from '../assets/expense.png'
import note from '../assets/note.png'
import todo from '../assets/todo.png'
import github from '../assets/github.png'
import dsav from '../assets/sort.png'
import comp from '../assets/comp.png'
import stud from '../assets/stud.png'
import sydny from '../assets/sydny.png'
import port from '../assets/port.png'
import sh from '../assets/sh.png'
import ai from '../assets/ai.png'
import ev from '../assets/ev.png'
import mai from '../assets/mai.png'
import crime from '../assets/crime.png'
import cash from '../assets/cash.png'
import gitdev from '../assets/gitdev.png'


const All = () => {

    const data = [
                  {
                  pic: crime,
                  title: "CrimeAlert – Anonymous Crime Reporting Platform",
                  desc: `A MERN stack platform that lets users report crimes anonymously using token-based login, featuring post, comment, and report validation with an admin panel for verification — promoting fearless and transparent reporting.`,
                  tech: ["MERN"],
                  live: "https://crime-reports.vercel.app",
                  code: "https://github.com/roshansu",
                },
         {
            pic: mai,
            title: "Hexa.ai – Multi-AI Chat Platform",
            desc: "A MERN-based platform where users can interact with multiple AI models like ChatGPT, Gemini, and DeepSeek in one place. It offers individual or combined responses, separate chat windows, model toggling, and persistent chat history for a seamless experience.",
            tech: ["MERN", "Gen Ai"],
            live: "https://hexaai-wheat.vercel.app",
            code: "https://github.com/roshansu/hexa-ai",
        },
        {
            pic:sh,
            desc:" A platform for Shobhit University CS students to connect with mentors, get AI-powered guidance, and grow through verified learning and networking opportunities.",
            title:"ByteUP",
            tech:["MERN", "TailwindCss", "Gen Ai"],
            live:"https://www.byteup.online",
            code:"https://github.com/roshansu"
        },
        {
            pic: stud,
            desc: "Developed a campus connection app where students can connect with others within their campus and they can share opinion to others.",
            title:"StudIN",
            tech: ["MERN", "TailwindCss"],
            live: "https://studin.in",
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
{
            pic: ev,
            desc: "A React and Redux-based frontend platform designed to explore and showcase events with an intuitive, responsive interface for a smooth user experience.",
            title:"EventSphere",
            tech: ["React.js"],
            live: "https://eventsphere-three.vercel.app",
            code: "https://github.com/roshansu/eventsphere",
        },  
         {
            pic: ai,
            desc: " A custom-built chatbot that answers questions about me, showcasing my skills, projects, and journey in a conversational and interactive way.",
            title:"Personal Chatbot",
            tech: ["React.js", "Gen Ai"],
            live: "https://roshan-chatbot.vercel.app",
            code: "https://github.com/roshansu/roshan-chatbot",
        },  
        {
            pic: port,
            desc: "Developed a personal portfollio website.",
            title:"Portfollio",
            tech: ["React.js", "TailwindCss"],
            live: "https://roshanportfollio.netlify.app/",
            code: "https://github.com/roshansu/portfollio",
        },
        {
            pic: todo,
            desc: "Developed a simple todo app.",
            title:"Todo app",
            tech: ["React.js", "TailwindCss"],
            live: "https://to0do.netlify.app/",
            code: "https://github.com/roshansu/todoapp",
        },
        {
            pic: dsav,
            desc: "Developed a sorting algorithm visualizer",
            title:"DSA visualizer",
            tech: ["React.js", "TailwindCss"],
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
            pic: gitdev,
            desc: "A web-based application that lets users search GitHub profiles, view key stats, explore repositories, and compare two users in battle mode.",
            title:"gitDev",
            tech: ["HTML5", "CSS", "JavaScript"],
            live: "https://gitdevv.netlify.app/",
            code: "https://github.com/roshansu/git-dev-w3",
        },
         {
            pic: cash,
            desc: "Track expenses month-wise, visualize cash flow with charts, and export detailed financial reports as PDFs for easy analysis.",
            title:"Cashflow",
            tech: ["HTML5", "CSS", "JavaScript", "Chartjs", "Pdfjs"],
            live: "https://cashflowtracke.netlify.app/",
            code: "https://github.com/roshansu/cash-flow-salary-and-expanse-tracker",
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
            pic: timer,
            desc: "Developed a timer countdown website where you can see upcoming event's count down and you also create your count down.",
            title:"Timer countdown",
            tech: ["HTML5", "TailwindCss", "JavaScript"],
            live: "https://roshansu.github.io/TimerCountDown/",
            code: "https://github.com/roshansu/TimerCountDown",
        },

        {
            pic: quiz,
            desc: "Developed a quiz website where you can select quiz type and number of quizes.",
            title:"QuizMania",
            tech: ["HTML5", "CSS", "JavaScript"],
            live: "https://roshansu.github.io/QuizMania/",
            code: "https://github.com/roshansu/QuizMania",
        },

        {
            pic: calc,
            desc: "Developed a basic calculator.",
            title:"Calculator",
            tech: ["HTML5", "TailwindCss", "JavaScript"],
            live: "https://roshansu.github.io/Calculator/",
            code: "https://github.com/roshansu/Calculator",
        },

        {
            pic: draw,
            title:"Drawing app",
            desc: "Developed a drawing app with basic functionality where you can create shape like rectangle.",
            tech: ["HTML5 Canvas", "TailwindCss", "JavaScript"],
            live: "https://roshansu.github.io/DrawingApp/",
            code: "https://github.com/roshansu/DrawingApp",
        },

        {
            pic: note,
            desc: "Developed a secure note keeper app where you can write your notes and you can secure notes by locking it.",
            title:"NoteKeeper",
            tech: ["HTML5", "CSS", "JavaScript", "firebase"],
            live: "https://notekeeperz.netlify.app/",
            code: "https://github.com/roshansu/noteKeeper",
        },

        {
            pic: expense,
            desc: "Developed a expense tracker app where you can track your expense in multiple category and you can visualize it in bar chart.",
            title:"Expense tracker",
            tech: ["HTML5", "CSS", "JavaScript"],
            live: "https://roshansu.github.io/ExpenseTracker/",
            code: "https://github.com/roshansu/ExpenseTracker",
        },
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
            live: "https://roshansu.github.io/linkedIn-replicate/",
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
            <Card pic={item.pic} key={ind} title={item.title} desc={item.desc} tech={item.tech} live={item.live} code={item.code}/>
        ))
      }
    </div>
  )
}

export default All
