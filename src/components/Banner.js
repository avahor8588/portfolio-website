import React from 'react';
const Banner = ({ year, gpa, courses }) => {
    return (
      <div className="year">
        <div className="year-banner">
          <h2>{year}</h2>
        </div>
        <div className="year-info">
          <p>GPA: {gpa}</p>
          <h3>Important Courses</h3>
          <ul>
            {courses.map(course => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Banner;