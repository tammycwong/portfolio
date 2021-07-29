import './App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
