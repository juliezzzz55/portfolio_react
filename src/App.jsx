import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className='sep'></hr>
      <About />
      <hr className='sep'></hr>
      <Skills />
      <hr className='sep'></hr>
      <Projects />
      <hr className='sep'></hr>
      <Contact />
    </>
  )
}

export default App
