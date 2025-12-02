import Navbar from './sections/navbar'
import Hero from './sections/hero'
import About from './sections/About'
import Project from './components/Project'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
   <main id='home'>
    <Navbar />
    <Hero />
    <About />
    <Project />
    <Contact/>
    <Footer/>
   </main>
  )
}

export default App
