import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import HomePage from './components/pages/HomePage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Education from './components/pages/Education';
import Experiences from './components/pages/Experiences';
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/education' element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
