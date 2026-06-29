import { useState } from 'react'
import HeaderComponent from './components/header/header_component'
import MainComponent from "./components/main/MainComponent"
import ProfileComponent from './components/profile/ProfileComponent'
import ProjectsSection from './components/projects/Projects'

function App() {
  return (
    <div className='min-h-screen w-full bg-background font-poppins pl-64 pr-64'>
      <HeaderComponent />
      <MainComponent />
      <ProfileComponent />
      <ProjectsSection />
    </div>
  )
}

export default App
