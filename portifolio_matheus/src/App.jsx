import HeaderSection from './components/header/HeaderSection'
import MainSection from "./components/main/MainSection"
import AboutSection from './components/about/AboutSection'
import ProjectsSection from './components/projects/ProjectsSection'
import FooterSection from './components/footer/FooterSection'

function App() {
  return (
    <div className='min-h-screen w-full bg-background font-poppins'>
      <div className=' pl-64 pr-64'>
        <HeaderSection />
        <MainSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <FooterSection />
    </div>
  )
}

export default App
