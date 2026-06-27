import { useState } from 'react'
import HeaderComponent from './components/header/header_component'
import MainComponent from "./components/main/MainComponent"

function App() {
  return (
    <div className='min-h-screen w-full bg-background font-poppins'>
      <HeaderComponent />
      <MainComponent />
    </div>
  )
}

export default App
