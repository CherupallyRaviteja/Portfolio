import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Internships from "./components/Internships"
import Courses from "./components/Courses"

function App() {
  return (
    <>
  {/* Main Background */}
  <div className="fixed inset-0 -z-50 bg-[#0A0A0A]" />

  {/* Soft Ambient Lights */}
  <div className="fixed top-[-200px] left-[-100px] w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full -z-40" />

  <div className="fixed bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full -z-40" />

  <div className="relative z-10 bg-[#FAFAFA] text-[#0A0A0A] min-h-screen">

    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Internships />
    <Courses />
    <Contact />

  </div>
</>
  )
}

export default App