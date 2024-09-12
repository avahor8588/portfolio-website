import React from 'react';
import '../../App.css';
import Timeline from '../TimeLine';
import './Experiences.css'; 
import UMBCBANNER from './UMBCBANNER.png';
import leidos from './leidos.png';
export default function Experiences() {
  // Define your experience data
  const experiences = [
    {
      title: "Tesla",
      year:'May 2024 - August 2024 (Full Time)',
      summary: "Software Engineering Intern - Autopilot Simulation",
      bullets: ["Cut costs by reducing vehicle track testing via creating and validating FSD and traffic-aware cruise control simulated track tests using Unreal Engine, Python, and C++. (Linux) (Git)",
        "Safeguard runtime failure using object-oriented practices in the Tesla Autopilot simulation Infrastructure in an Entity Component system using C++ and HIL (Autopilot ECU) to run FSD in a simulated environment",
        "Querying PostgreSQL databases and writing Python scripts to highlight similarities in track and simulation"]
     
    },
    {
      title: "UMBC",
      year:'August 2023 - Present (Part Time)',
      summary: "I am Currently a Teaching Fellow For the data Structures Course at UMBC",
      bullets: ["Grading Projects, homework, and tests involving data structures such as heaps, linked lists, hash tables, and binary trees in C++",
       "Writing unit tests in Google test as well as holding in-person/virtual office hours for Data Structures"],
     
    },
    {
      title: "Leidos",
      year:'May 2023 - August 2023 (Full Time)',
      summary: "I was a Software Development Engineering Intern here, working on simulations on autonomous vehicles",
      bullets: ["Utilized CARLA (car learning to act) vehicle simulator callback functions to subscribe and pull the data needed for automated vehicle simulation and completed unit testing in a Linux environment", 
      "Created a Python/C++ script with Carla API using MATLAB to run multiple programs together via TCP/UDP messages so that vehicle platforms (Simulink, IPG Carmaker,etc.) can interact with Carla API",
       "Outlined/Created an interface in Python and TDL to receive and send vehicle information from external vehicles via JSON files containing vehicle object information through our VOICES (simulation) portal"],
    },
    {
    title: "Miller Construction Services",
    year:'March 2023 - August 2023 (Part Time)',
    summary: "I was a Full Stack Software Engineering Intern Here, where i worked on thier Database",
    bullets: ["Aided in development of a mern stack database using node.js, React, CSS, and MySQL workbench to create a database where the company can track its construction services."]
    },
    {
    title: "Johns Hopkins University, Applied Physics Lab",
    year:'April 2022 - May 2023',
    summary: "I was a Research Software Intern, where i worked full time during the summer and then worked part time during school year where I wrote a paper on the research (5 Hours a week)",
    bullets: ["Overcame obstacles in Machine Learning Classification algorithm and developed a model of covid mortality rates using k-nearest neighbor algorithms and NumPy and Pandas in Python",
  "Participated In training sessions to develop projects using Python data science library and MATLAB to model visuals using CSV files", 
"Wrote a research paper and created a model for the city learn challenge on a Proximal Policy Optimization Reinforcement Learning Algorithm linked with neural networks to reduce energy usage in a simulations"]
    }
  ];

  return (
    <div className='Experiences'>
      <h1>YOLO</h1>
      <div className="experience-wrapper">
        <Timeline experiences={experiences} />
        <div className="image-container">
          {experiences.map((exp, index) => (
            exp.icon && <img key={index} src={exp.icon} alt={exp.title} className="experience-image" />
          ))}
        </div>
      </div>
    </div>
  );
}
