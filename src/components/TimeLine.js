import React from 'react';

const ExperienceItem = ({ title,year, summary, bullets, icon }) => (
  <div className="experience-item">
    {icon && <img src={icon} alt={title} className="experience-icon" />}
    <h3>{title}</h3>
    <p>{year}</p>
    <p>{summary}</p>
    <ul>
      {bullets.map((bullet, index) => (
        <li key={index}>{bullet}</li>
      ))}
    </ul>
    {icon && <img src={icon} alt={title} className="experience-icon" />}
  </div>
);


const Timeline = ({ experiences }) => (
  <div className="timeline">
    {experiences.map((exp, index) => (
      <ExperienceItem key={index} {...exp} />
    ))}
  </div>
);

export default Timeline;
