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
    // <BrowserRouter>
    // <NavBar/>
    <div className="App">
      <Header/>
    {/* <Switch>
      <Route exact path="/"> */}
      <AboutMe/>
      {/* </Route> */}

      {/* <Route path="/projects"> */}
      <Projects/>
      {/* </Route> */}

      {/* <Route path="/contact"> */}
      <Contact />
      {/* </Route>

    </Switch> */}
    </div>
    // </BrowserRouter>
  );
}

export default App;
