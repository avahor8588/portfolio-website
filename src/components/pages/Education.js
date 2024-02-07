import React from 'react';
import '../../App.css';
import './Education.css';

const Education = () => {
  return (
    <div className='Education'>
      <div className="passage">
        <p>University Of Maryland Baltimore County, Bachelors of Computer Science, Graduating December 2024 .</p>
      </div>

      <div className="education-content">
        <div className="year">
          <div className="year-banner">
            <h2>Junior</h2>
          </div>
          <div className="year-info">
            <p>GPA: 3.9</p>
            <h3>Important Courses</h3>
            <ul>
              <li>Software Engineering I</li>
              <li>Database Mangmt Systems</li>
              <li>Artificial Intelligence</li>
              <li>Princ Of Operating Systems</li>
              <li>Princ Computer Security</li>
              <li>Intro to Machine Learning</li>
            </ul>
          </div>
        </div>

        <div className="year">
          <div className="year-banner">
            <h2>Sophomore</h2>
          </div>
          <div className="year-info">
            <p>GPA: 3.9</p>
            <h3>Important Courses</h3>
            <ul>
              <li>Introductory Physics II</li>
              <li>Introduction To Linear Algebra</li>
              <li>Computer Architecture</li>
              <li>Data Structures</li>
              <li>Introductory Physics I</li>
              <li>Comp Organ & Assemb Lang</li>
            </ul>
          </div>
        </div>

        <div className="year">
          <div className="year-banner">
            <h2>Freshman</h2>
          </div>
          <div className="year-info">
            <p>GPA: 3.8</p>
            <h3>Important Courses</h3>
            <ul>
              <li>Computer Science I</li>
              <li>Calc & Analy Geomtry I</li>
              <li>Computer Science II</li>
              <li>Discrete Structures</li>
              <li>Calc & Analy Geometry II</li>
              <li>Prin Of Prog Languages</li>
            </ul>
          </div>

        </div>

      </div>
     

      
  
    </div>
  );
};

export default Education;
