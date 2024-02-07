import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
