// src/HomePage.js
import React from 'react';
import './HomePage.css';
import SocialLinks from '../SocialLinks';
import boat from "./boatME.JPG";

function HomePage() {
  return (
    <div className="landing-page">
      <section className="landing-hero">
        <div className="hero-content container">
          <div className="hero-text">
            <div className="badge">Portfolio</div>
            <h1 className="hero-title">Aamil Vahora</h1>
            <h2 className="hero-subtitle">Software Engineer</h2>
            <p className="hero-meta">UMBC CS Graduate • Qualcomm • Systems, Simulation, Full‑stack</p>
            <div className="hero-tags">
              <span className="tag">C/C++</span>
              <span className="tag">Python</span>
              <span className="tag">React</span>
              <span className="tag">Kubernetes</span>
            </div>
            <div className="hero-buttons">
              <a href="/#/projects" className="btn-primary">View Projects</a>
              <a href="/#/aboutme" className="btn-secondary">About Me</a>
            </div>
            <div className="hero-social">
              <SocialLinks />
            </div>
          </div>
          <div className="hero-image">
            <img src={boat} alt="Aamil Vahora" className="profile-photo"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
