import Navbar from "./components/Navbar"
import SplineBackground from "./components/SplineBackground"
import Herosection from "./components/Herosection"
import Hero from "./components/Hero"
import SkillsShowcase from "./components/SkillsShowcase"
import WorkShowcase from "./components/WorkShowcase"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
 
  return (
    <>
      {/* <SplineBackground /> */}

    <Navbar/>
    <Hero/>
    <Herosection/>
    <WorkShowcase/>
    <SkillsShowcase/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
