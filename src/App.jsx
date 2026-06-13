import './App.css'
import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projets'
import { ScrollToTop } from './components/scrollToTop'
import { Skills } from './components/Skills'
import { StarBackground } from './components/StarBackground'

function App() {
  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-x-hidden'>
      <StarBackground/>
      <div className='relative z-10'>
         <Navbar/>
         <Intro/>
         <About/>
         <Skills/>
         <Projects/>
         <Experience/>
         <Contacts/>
         <Footer/>
      </div>
      <ScrollToTop/>
    </div>
  )
}

export default App
