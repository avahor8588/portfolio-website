import React from 'react';
import './JHU.css';


export default function JHU(){
  return (
    <div className='jhu-page'>
      <section className='jhu-hero'>
        <div className='hero-content container'>
          <div className='hero-text'>
            <div className='badge'>Research</div>
            <h1 className='hero-title'>Johns Hopkins APL</h1>
            <h2 className='hero-subtitle'>Research Software Intern</h2>
            <p className='hero-meta'>Laurel, MD • April 2022 – May 2023</p>
            <div className='hero-tags'>
              <span className='tag'>Python</span>
              <span className='tag'>NumPy</span>
              <span className='tag'>Pandas</span>
              <span className='tag'>MATLAB</span>
              <span className='tag'>Reinforcement Learning</span>
            </div>
          </div>
          <div className='hero-visual'>
            <svg className='wave-shape' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <defs>
                <linearGradient id='jhuGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stopColor='#38bdf8'/>
                  <stop offset='100%' stopColor='#0ea5e9'/>
                </linearGradient>
              </defs>
              <path d='M0 120 C 60 100, 120 140, 180 120 C 240 100, 300 140, 360 120 L 400 140 L 0 140 Z' fill='url(#jhuGrad)' opacity='0.95'/>
            </svg>
          </div>
        </div>
      </section>

      <section className='container section-grid'>
        <div className='card highlight'>
          <h3>Impact</h3>
          <ul>
            <li>Developed a COVID mortality classification model using k-NN with NumPy and Pandas.</li>
            <li>Built MATLAB visualizations and participated in Python data science training sessions.</li>
            <li>Implemented PPO reinforcement learning on CityLearn to reduce energy usage in simulation; co-authored paper documenting results.</li>
          </ul>
        </div>
        <div className='card'>
          <h3>What I Built</h3>
          <ul>
            <li>Data preprocessing pipelines and visualization dashboards.</li>
            <li>Baseline models and RL agents with evaluation scripts.</li>
            <li>Reproducible experiments with tracked metrics.</li>
          </ul>
        </div>
        <div className='card'>
          <h3>Tech Stack</h3>
          <div className='tech-chips'>
            <span className='chip'>Python</span>
            <span className='chip'>NumPy</span>
            <span className='chip'>Pandas</span>
            <span className='chip'>MATLAB</span>
            <span className='chip'>PPO</span>
            <span className='chip'>CityLearn</span>
          </div>
        </div>
      </section>
    </div>
  );
}