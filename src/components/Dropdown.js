import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
  return (
    <ul className='dropdown-menu clicked'>
      <li>
        <Link to='/Tesla' className='dropdown-link'>
          Tesla
        </Link>
      </li>
      <li>
        <Link to='/Leidos' className='dropdown-link'>
          Leidos
        </Link>
      </li>
      <li>
        <Link to='/JHU' className='dropdown-link'>
          JHU
        </Link>
      </li>
    </ul>
  );
}

export default Dropdown;
