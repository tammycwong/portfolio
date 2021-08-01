import './App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Modal from './components/Modal'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

function App() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const title = 'Tammy Wong'
  return (
    <div className="App">
      <Helmet title={title} />
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
