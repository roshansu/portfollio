import React from 'react'
import Card from './Card'
import ai from '../assets/ai.png'
import mai from '../assets/mai.png'

const Genai = () => {
 const data = [
        {
            pic: mai,
            title: "Hexa.ai – Multi-AI Chat Platform",
            desc: "A MERN-based platform where users can interact with multiple AI models like ChatGPT, Gemini, and DeepSeek in one place. It offers individual or combined responses, separate chat windows, model toggling, and persistent chat history for a seamless experience.",
            tech: ["MERN", "Gen Ai"],
            live: "https://hexaai-wheat.vercel.app",
            code: "https://github.com/roshansu/hexa-ai",
        },
        {
            pic: ai,
            desc: " A custom-built chatbot that answers questions about me, showcasing my skills, projects, and journey in a conversational and interactive way.",
            title:"Personal Chatbot",
            tech: ["React.js", "Gen Ai"],
            live: "https://roshan-chatbot.vercel.app",
            code: "https://github.com/roshansu/roshan-chatbot",
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

export default Genai
