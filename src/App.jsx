import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <SideNav />
      <Main />
      <Resume />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
