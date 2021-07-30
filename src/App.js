import './App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Modal from './components/Modal'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import React, { useState } from 'react'

function App() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} activeVideo={activeVideo}/> 
      <NavBar />
      <Header />
      <AboutMe />
      <Projects activeVideo={activeVideo} setActiveVideo={setActiveVideo}
      isOpen={isOpen} setIsOpen={setIsOpen}/> 
      <Contact />
    </div>
  );
}

export default App;
