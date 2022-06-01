import './App.css';
import Intro from './components/Intro';
import React from 'react';
// import Nav from './components/Nav';
import 'semantic-ui-css/semantic.min.css';
import Projects from './components/Projects';
import Publications from './components/Publications';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
