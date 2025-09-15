import React from 'react';
import './Projects.css';
// Removed unused Card import

const Projects = () => {
  const projects = [
    {
      title: "Astro Beasts",
      description: "A full-stack game implemented using Phaser.js frontend and Flask Python backend with MySQL Database. Users can equip Beasts and fight enemies using them.",
      technologies: ["Phaser.js", "Flask", "Python", "MySQL", "JavaScript"],
      features: [
        "Real-time multiplayer gameplay",
        "Beast collection and customization",
        "Turn-based combat system",
        "User authentication and profiles"
      ]
    },
    {
      title: "Smart Pot",
      description: "An IoT smart pot that measures soil moisture levels, allowing users to know when to water their plants. Features a complete ecosystem with hardware and software components.",
      technologies: ["ESP8266", "Node.js", "C++", "React Native", "IoT"],
      features: [
        "Real-time soil moisture monitoring",
        "Mobile app notifications",
        "Automated watering alerts",
        "Data logging and analytics"
      ]
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Featured Projects</h1>
        <p>Personal projects showcasing my full-stack development and IoT skills</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
