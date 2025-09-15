import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import HomePage from './components/pages/HomePage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './components/pages/Education';
import Experiences from './components/pages/Experiences';
import AboutMe from './components/pages/AboutMe';
import Tesla from './components/pages/Tesla.js';
import Leidos from './components/pages/Leidos.js';
import JHU from './components/pages/JHU.js';
import Qualcomm from './components/pages/Qualcomm.js';
import Projects from './components/pages/Projects.js';
import Resume from './components/pages/Resume.js';

function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/education' element={<Education />} />
        <Route path='/Tesla' element={<Tesla />} />
        <Route path='/Leidos' element={<Leidos />} />
        <Route path='/JHU' element={<JHU />} />
        <Route path='/Qualcomm' element={<Qualcomm />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        
      </Routes>
    </Router>
  );
}

export default App;
