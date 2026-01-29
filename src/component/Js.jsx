import React from 'react'
import timer from '../assets/timer.png'
import quiz from '../assets/quiz.png'
import calc from '../assets/calc.png'
import draw from '../assets/draw.png'
import expense from '../assets/expense.png'
import note from '../assets/note.png'
import Card from './Card'
import cash from '../assets/cash.png'
import gitdev from '../assets/gitdev.png'
// Track expenses month-wise, visualize cash flow with charts, and export detailed financial reports as PDFs for easy analysis.
const Js = () => {
   const data = [
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
            pic: note,
            desc: "Developed a secure note keeper app where you can write your notes and you can secure notes by locking it.",
            title:"NoteKeeper",
            tech: ["HTML5", "CSS", "JavaScript", "firebase"],
            live: "https://notekeeperz.netlify.app/",
            code: "https://github.com/roshansu/noteKeeper",
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
            pic: expense,
            desc: "Developed a expense tracker app where you can track your expense in multiple category and you can visualize it in bar chart.",
            title:"Expense tracker",
            tech: ["HTML5", "CSS", "JavaScript"],
            live: "https://roshansu.github.io/ExpenseTracker/",
            code: "https://github.com/roshansu/ExpenseTracker",
        },
        {
            pic: timer,
            desc: "Developed a timer countdown website where you can see upcoming event's count down and you also create your count down.",
            title:"Timer countdown",
            tech: ["HTML5", "CSS", "JavaScript"],
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

export default Js
