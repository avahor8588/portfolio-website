import React from 'react';
import './Tesla.css';


export default function Tesla(){
  return (
    <div className='tesla-page'>
      <section className='tesla-hero'>
        <div className='hero-content container'>
          <div className='hero-text'>
            <div className='badge'>Internship</div>
            <h1 className='hero-title'>Tesla</h1>
            <h2 className='hero-subtitle'>Software Engineering Intern — Autopilot Simulation</h2>
            <p className='hero-meta'>Palo Alto, CA • May 2024 – August 2024</p>
            <div className='hero-tags'>
              <span className='tag'>Unreal Engine</span>
              <span className='tag'>C++ (Linux)</span>
              <span className='tag'>Python</span>
              <span className='tag'>PostgreSQL</span>
              <span className='tag'>HIL</span>
              <span className='tag'>ECS</span>
            </div>
          </div>
          <div className='hero-visual'>
            <svg className='car-shape' viewBox='0 0 400 160' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <defs>
                <linearGradient id='redGlow' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stopColor='#ef4444'/>
                  <stop offset='100%' stopColor='#b91c1c'/>
                </linearGradient>
              </defs>
              <g className='car-body'>
                <path d='M30 110 C 60 70, 120 50, 180 55 C 220 30, 300 30, 360 80 L 380 110 L 30 110 Z' fill='url(#redGlow)' opacity='0.95'/>
              </g>
              <g className='wheel-group'>
                <circle cx='110' cy='110' r='20' fill='#111827'/>
                <circle cx='305' cy='110' r='20' fill='#111827'/>
                <circle cx='110' cy='110' r='10' fill='#e5e7eb'/>
                <circle cx='305' cy='110' r='10' fill='#e5e7eb'/>
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className='container section-grid'>
        <div className='card highlight'>
          <h3>Impact</h3>
          <ul>
            <li>Reduced expensive track testing by designing and validating FSD and TACC simulated track tests in Unreal Engine, Python, and C++ (Linux).</li>
            <li>Hardened reliability in the Autopilot simulation infrastructure using OOP within an Entity Component System; executed FSD on HIL (Autopilot ECU).</li>
            <li>Measured track-to-sim parity by querying PostgreSQL and scripting Python analytics to highlight scenario similarities.</li>
          </ul>
        </div>
        <div className='card'>
          <h3>What I Built</h3>
          <ul>
            <li>Reusable simulation scenarios with parameterized actors and traffic controllers.</li>
            <li>CLI tooling for batch-running scenarios and collecting KPIs.</li>
            <li>Data pipelines to aggregate metrics for validation dashboards.</li>
          </ul>
        </div>
        <div className='card'>
          <h3>Tech Stack</h3>
          <div className='tech-chips'>
            <span className='chip'>Unreal Engine</span>
            <span className='chip'>C++ (Linux)</span>
            <span className='chip'>Python</span>
            <span className='chip'>PostgreSQL</span>
            <span className='chip'>Git</span>
            <span className='chip'>HIL</span>
            <span className='chip'>ECS</span>
          </div>
        </div>
      </section>
    </div>
  );
}