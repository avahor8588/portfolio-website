import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HomePage from './components/pages/HomePage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './components/pages/Education';
import Experiences from './components/pages/Experiences';
import AboutMe from './components/pages/AboutMe';
import Tesla from './components/pages/Tesla.js';
import Leidos from './components/pages/Leidos.js';
import JHU from './components/pages/JHU.js';

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
        
      </Routes>
    </Router>
  );
}

export default App;
