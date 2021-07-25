import './App.css';
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <AboutMe/>
      <NavBar/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
