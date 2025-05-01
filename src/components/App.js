import NavBar from "./NavBar"
import HeroSection from "./HeroSection"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
  return (
    <>
      <NavBar />
      <main className='site-container'>
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
