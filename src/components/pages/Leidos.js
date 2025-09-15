import React from 'react';
import './Leidos.css';


export default function Leidos(){
  return (
    <div className='leidos-page'>
      <section className='leidos-hero'>
        <div className='hero-content container'>
          <div className='hero-text'>
            <div className='badge'>Internship</div>
            <h1 className='hero-title'>Leidos</h1>
            <h2 className='hero-subtitle'>Software Development Engineering Intern</h2>
            <p className='hero-meta'>McLean, VA • May 2023 – August 2023</p>
            <div className='hero-tags'>
              <span className='tag'>Python</span>
              <span className='tag'>C++</span>
              <span className='tag'>CARLA</span>
              <span className='tag'>Simulink</span>
              <span className='tag'>TCP/UDP</span>
              <span className='tag'>Linux</span>
            </div>
          </div>
          <div className='hero-visual'>
            <svg className='poly-shape' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <defs>
                <linearGradient id='leidosGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stopColor='#8b5cf6'/>
                  <stop offset='100%' stopColor='#6d28d9'/>
                </linearGradient>
              </defs>
              <polygon points='20,160 140,40 240,100 360,20 380,180 40,180' fill='url(#leidosGrad)' opacity='0.95'/>
            </svg>
          </div>
        </div>
      </section>

      <section className='container section-grid'>
        <div className='card highlight'>
          <h3>Impact</h3>
          <ul>
            <li>Built a Python/C++ system using the CARLA API to orchestrate multiple programs over TCP/UDP so Simulink, IPG Carmaker, etc., could interact with CARLA.</li>
            <li>Designed a Python + TDL interface to exchange vehicle information via JSON through the VOICES simulation portal.</li>
          </ul>
        </div>
        <div className='card'>
          <h3>What I Built</h3>
          <ul>
            <li>Inter-process orchestration with resilient retries and status reporting.</li>
            <li>Configurable scenario loader for repeatable experiments.</li>
            <li>JSON schema for vehicle object interchange across systems.</li>
          </ul>
        </div>
        <div className='card'>
          <h3>Tech Stack</h3>
          <div className='tech-chips'>
            <span className='chip'>Python</span>
            <span className='chip'>C++</span>
            <span className='chip'>CARLA</span>
            <span className='chip'>MATLAB/Simulink</span>
            <span className='chip'>TCP/UDP</span>
            <span className='chip'>Linux</span>
          </div>
        </div>
      </section>
    </div>
  );
}