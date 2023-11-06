import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Skills from "./pages/Skills/Skills";
import Connect from "./pages/Connect/Connect";
import "../src/App.css";
import scrollDownArrow from "./assets/images/down-arrow.svg";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      {/* Home */}
      <div id="home" className="app__home">
        <Home id />
      </div>
      {/* Scroll Icon */}
      <div className="app__scrollDownIndicator">
        <img src={scrollDownArrow} alt="scrollIcon" />
      </div>
      {/* Project */}
      <div id="project" className="app__project">
        <Project />
      </div>
      {/* Skills */}
      <div id="skills" className="app__skills">
        <Skills />
      </div>
      {/* Connect */}
      <div id="connect" className="app__skills">
        <Connect />
      </div>
    </div>
  );
}

export default App;
