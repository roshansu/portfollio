import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './component/Home'
import About from './component/About'
import Project from './component/Project'
import Contact from './component/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <Project/>
    <Contact/>
  </StrictMode>,
)
