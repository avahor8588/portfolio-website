import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
  return (
    <ul className='dropdown-menu clicked' role='menu'>
      <li role='none'>
        <Link to='/Qualcomm' className='dropdown-link' role='menuitem' tabIndex={0}>
          <i className='fas fa-microchip'></i>
          Qualcomm
        </Link>
      </li>
      <li role='none'>
        <Link to='/Tesla' className='dropdown-link' role='menuitem' tabIndex={0}>
          <i className='fas fa-car'></i>
          Tesla
        </Link>
      </li>
      <li role='none'>
        <Link to='/Leidos' className='dropdown-link' role='menuitem' tabIndex={0}>
          <i className='fas fa-project-diagram'></i>
          Leidos
        </Link>
      </li>
      <li role='none'>
        <Link to='/JHU' className='dropdown-link' role='menuitem' tabIndex={0}>
          <i className='fas fa-university'></i>
          JHU
        </Link>
      </li>
    </ul>
  );
}

export default Dropdown;
