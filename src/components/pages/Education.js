// Education.js
import React from 'react';
import Banner from '../Banner'; // Import Banner component
import '../../App.css';
import './Education.css';
import UMBC from './UMBC.png';
import UMBCBANNER from './UMBCBANNER.png';

const Education = () => {
  const educationData = [
    {
      year: 'Junior',
      gpa: '3.9',
      courses: [
        'Software Engineering I',
        'Database Mangmt Systems',
        'Artificial Intelligence',
        'Princ Of Operating Systems',
        'Princ Computer Security',
        'Intro to Machine Learning',
      ],
    },
    {
      year: 'Sophomore',
      gpa: '3.9',
      courses: [
        'Introductory Physics II',
        'Introduction To Linear Algebra',
        'Computer Architecture',
        'Data Structures',
        'Introductory Physics I',
        'Comp Organ & Assemb Lang',
      ],
    },
    {
      year: 'Freshman',
      gpa: '3.8',
      courses: [
        'Computer Science I',
        'Calc & Analy Geomtry I',
        'Computer Science II',
        'Discrete Structures',
        'Calc & Analy Geometry II',
        'Prin Of Prog Languages',
      ],
    },
  ];

  return (
    <div className='Education'>
      <div className="content-wrapper">
    <div className="passage">
      <p>Hi Everybody My Name is Aamil And i Go To The Univeristy Of Maryalnd Baltimore County, I am currently a junior majoring in computer Science and i am set to graduate December of 2024. Go Retrievers</p>
    </div>
    <div className="education-image">
      <img src={UMBC} alt="Descriptive Alt Text" />
    </div>
  </div>
      <div className="education-content">
        {educationData.map(data => (
          <Banner key={data.year} year={data.year} gpa={data.gpa} courses={data.courses} />
        ))}
      </div>
    </div>
  );
};

export default Education;
