import { useState } from 'react'
import './css/App.css'
import NavBar from './Components/NavBAr.jsx'
import { Routes, Route } from 'react-router-dom'
import Skills from './Pages/Skills.jsx'
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={ <Projects/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App