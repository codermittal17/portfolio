import NavBar from "./NavBar"
import Main from "./Main"
import HeroSection from "./HeroSection"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
  return (
    <>
      <NavBar />
      <Main>
        <HeroSection />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Main>
    </>
  )
}

export default App
