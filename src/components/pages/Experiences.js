import React from 'react';
import '../../App.css';
import Timeline from '../TimeLine';
import './Experiences.css'; 
export default function Experiences() {
  // Define your experience data
  const experiences = [
    {
      title: "Qualcomm",
      year:'April 2025 – Present',
      summary: "Software Engineer - Working on low-level systems programming and crash dump analysis",
      bullets: [
        "Develop Python scripts using the PYKD library to automate crash dump analysis",
        "Implemented a Windows error (crash dump) tracking system using .NET, RabbitMQ, React, and Node.js, deploying it with Windows Docker images on Kubernetes",
        "Created UMDF and KMDF (in C/C++) to track bit flips to aid in debugging crash dumps",
        "Analyzing 64-bit ARM Assembly on Windows to see where register memory is corrupted",
        "Optimized low-level Windows drivers by working directly with Deferred Procedure Calls (DPCs), Interrupt Service Routines (ISRs), I/O Request Packets (IRPs), PCIe interfaces, and synchronization mechanisms such as spinlocks"
      ],
    },
    {
      title: "Tesla",
      year:'May 2024 – August 2024',
      summary: "Software Engineering Intern - Autopilot Simulation",
      bullets: [
        "Cut costs by reducing vehicle track testing via creating and validating FSD and traffic-aware cruise control simulated track tests using Unreal Engine, Python, and C++ (Linux)",
        "Safeguard runtime failure using object-oriented practices in the Tesla Autopilot simulation Infrastructure in an Entity Component system using C++ and HIL (Autopilot ECU) to run FSD in a simulated environment",
        "Querying PostgreSQL databases and writing Python scripts to highlight similarities in track and simulation"
      ],
    },
    {
      title: "UMBC",
      year:'August 2023 - December 2024',
      summary: "Teaching Fellow (Data Structures)",
      bullets: [
        "Graded Projects and homework and developed unit tests (google tests) for data structures such as heaps, linked lists, hash tables, and binary trees in C++ (Linux)",
        "Held in-person/virtual office hours for Data Structures students"
      ],
    },
    {
      title: "Leidos",
      year:'May 2023 - August 2023',
      summary: "Software Development Engineering Intern",
      bullets: [
        "Created a Python/C++ script with Carla API to run multiple programs together via TCP/UDP messages so that vehicle platforms (Simulink, IPG Carmaker, etc.) can interact with Carla API",
        "Outlined/Created an interface in Python and TDL to receive and send vehicle information from external vehicles via JSON files containing vehicle object information through our VOICES (simulation) portal"
      ],
    },
    {
      title: "Johns Hopkins University, Applied Physics Lab",
      year:'April 2022 - May 2023',
      summary: "Research Software Intern",
      bullets: [
        "Overcame obstacles in Machine Learning Classification algorithm and developed a model of covid mortality rates using k-nearest neighbor algorithms and NumPy and Pandas in Python",
        "Participated In training sessions to develop projects using Python data science library and MATLAB to model visuals using CSV files", 
        "Wrote a research paper and created a model for the city learn challenge on a Proximal Policy Optimization Reinforcement Learning Algorithm linked with neural networks to reduce energy usage in a simulations"
      ],
    }
  ];

  return (
    <div className='Experiences'>
      <h1>Professional Experience</h1>
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
