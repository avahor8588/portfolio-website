import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const [click, setClick] = useState(false);
  const Handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <a href="/" className="navbar-logo">Aamil Vahora</a>
        
        <div className='menu-icon' onClick={Handleclick}>
            < i className={click ? 'fas fa-times' :"fas fa-bars" }></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to="/Home" className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/About Me" className='nav-links' onClick={closeMobileMenu}>
            About Me
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/Experience" className='nav-links' onClick={closeMobileMenu}>
            Experience
          </Link>
        </li>
        
      </ul>
      </div>
    </nav>

    </>
  );
}

export default Navbar;