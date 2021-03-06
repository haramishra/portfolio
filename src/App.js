import React from 'react';
import './App.scss';
import Nav from './components/nav';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Intrests from './components/Intrests';
import Awards from './components/Awards'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid p-0">
          <About />
          <hr className="m-0" />
          <Skills />
          <hr className="m-0" />
          <Projects />
          <hr className="m-0" />
          <Intrests />
          <hr className="m-0" />
          <Awards />
        </div>
      </div>
    )
  }
}

export default App;
