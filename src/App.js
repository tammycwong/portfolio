import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Blogs from './components/Blogs'

function App() {
  return (
    <div className="App">
      <AboutMe/>
      <NavBar/>
      <Projects/>
      <Blogs/>
    </div>
  );
}

export default App;
