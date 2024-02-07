// src/HomePage.js
import React from 'react';
import './HomePage.css'; // Make sure to create this CSS file
import SocialLinks from '../SocialLinks';

function HomePage() {
  return (
    <div className="home-container">
      <img src="/images/boatMe.jpg" alt="Me" className="my-photo"/>
      <p className="blurb">Welcome to my website!, Here's a little about me...</p>
      <SocialLinks />
    </div>
  );
}

export default HomePage;
