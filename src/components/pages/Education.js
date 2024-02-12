// Education.js
import React from 'react';
import Banner from '../Banner';
import '../../App.css';
import './Education.css';
import UMBC from './UMBC.png';

const Education = () => {
  const educationData = [
    {
      year: 'Junior',
      gpa: '3.9',
      courses: [
        'Software Engineering I',
        'Database Management Systems', // Corrected spelling
        'Artificial Intelligence',
        'Principles of Operating Systems', // Made spelling consistent and formal
        'Principles of Computer Security', // Made spelling consistent and formal
        'Introduction to Machine Learning', // Made spelling consistent
      ],
    },
    {
      year: 'Sophomore',
      gpa: '3.9',
      courses: [
        'Introductory Physics II',
        'Introduction to Linear Algebra', 
        'Computer Architecture',
        'Data Structures',
        'Introductory Physics I',
        'Computer Organization & Assembly Language', 
      ],
    },
    {
      year: 'Freshman',
      gpa: '3.8',
      courses: [
        'Computer Science I',
        'Calculus & Analytical Geometry I', 
        'Computer Science II',
        'Discrete Structures',
        'Calculus & Analytical Geometry II', 
        'Principles of Programming Languages', 
      ],
    },
  ];

  return (
    <div className='Education'>
      <div className="content-wrapper">
        <div className="passage">
          <p>Hello everyone, my name is Aamil Vahora, and I am attending the University of Maryland, Baltimore County. I am currently a junior majoring in Computer Science, with an expected graduation date of December 2024. Go Retrievers!</p>
        </div>
        <div className="education-image">
          <img src={UMBC} alt="UMBC Campus" /> 
        </div>
      </div>
      <div className="education-content">
        {educationData.map((data) => (
          <Banner key={data.year} year={data.year} gpa={data.gpa} courses={data.courses} />
        ))}
      </div>
    </div>
  );
};

export default Education;
