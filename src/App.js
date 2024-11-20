import './styles/App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Home />
      </div>
      <div className="App-top-align" id="about">
        <About />
      </div>
      <div className="App-top-align" id="skills">
        <Skills />
      </div>
      <div className="App-top-align" id="projects">
        <Projects />
      </div>
      <div className="App-top-align" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
