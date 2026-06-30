import HeaderSection from './components/header/HeaderSection'
import MainSection from "./components/main/MainSection"
import AboutSection from './components/about/AboutSection'
import ProjectsSection from './components/projects/ProjectsSection'
import FooterSection from './components/footer/FooterSection'

function App() {
  return (
    <div className='min-h-screen w-full bg-background font-poppins'>
      <div className='mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16'>
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
