import React from 'react';
import './Qualcomm.css';

export default function Qualcomm(){
  return (
    <div className='qualcomm-page'>
      <section className='qualcomm-hero'>
        <div className='hero-content container'>
          <div className='hero-text'>
            <div className='badge'>Full-time</div>
            <h1 className='hero-title'>Qualcomm</h1>
            <h2 className='hero-subtitle'>Software Engineer</h2>
            <p className='hero-meta'>San Diego, CA • April 2025 – Present</p>
            <div className='hero-tags'>
              <span className='tag'>Windows Kernel</span>
              <span className='tag'>C/C++</span>
              <span className='tag'>PYKD</span>
              <span className='tag'>.NET</span>
              <span className='tag'>Kubernetes</span>
              <span className='tag'>RabbitMQ</span>
            </div>
          </div>
          <div className='hero-visual'>
            <svg className='chip-shape' viewBox='0 0 400 220' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <defs>
                <linearGradient id='qcGrad' x1='0%' y1='0%' x2='100%' y2='0%'>
                  <stop offset='0%' stopColor='#38bdf8'/>
                  <stop offset='100%' stopColor='#2563eb'/>
                </linearGradient>
              </defs>
              <rect x='40' y='60' width='320' height='120' rx='14' fill='url(#qcGrad)' opacity='0.95'/>
              <g fill='#0b1220'>
                <rect x='10' y='80' width='20' height='6' rx='3' />
                <rect x='10' y='100' width='20' height='6' rx='3' />
                <rect x='10' y='120' width='20' height='6' rx='3' />
                <rect x='10' y='140' width='20' height='6' rx='3' />
                <rect x='370' y='80' width='20' height='6' rx='3' />
                <rect x='370' y='100' width='20' height='6' rx='3' />
                <rect x='370' y='120' width='20' height='6' rx='3' />
                <rect x='370' y='140' width='20' height='6' rx='3' />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <section className='container section-grid'>
        <div className='card highlight'>
          <h3>Impact</h3>
          <ul>
            <li>Automated crash dump analysis using Python with the PYKD library.</li>
            <li>Built a crash dump tracking system with .NET, RabbitMQ, React, and Node.js; deployed Windows Docker images on Kubernetes.</li>
            <li>Developed UMDF and KMDF components in C/C++ to track bit flips aiding in debugging.</li>
            <li>Analyzed 64-bit ARM assembly on Windows to identify corrupted register memory locations.</li>
            <li>Optimized low-level Windows drivers using DPCs, ISRs, IRPs, PCIe, and spinlocks to improve stability and performance.</li>
          </ul>
        </div>
        <div className='card'>
          <h3>Systems & Tooling</h3>
          <ul>
            <li>Kernel-mode driver debugging and instrumentation.</li>
            <li>Telemetry pipelines for error tracking and visualization.</li>
            <li>Containerized Windows workloads orchestrated with Kubernetes.</li>
          </ul>
        </div>
        <div className='card'>
          <h3>Tech Stack</h3>
          <div className='tech-chips'>
            <span className='chip'>C/C++</span>
            <span className='chip'>UMDF/KMDF</span>
            <span className='chip'>PYKD</span>
            <span className='chip'>.NET</span>
            <span className='chip'>RabbitMQ</span>
            <span className='chip'>React</span>
            <span className='chip'>Node.js</span>
            <span className='chip'>Kubernetes</span>
          </div>
        </div>
      </section>
    </div>
  );
}


