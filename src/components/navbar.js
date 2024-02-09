import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './umbcLogo.png'; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <a href="/" className="navbar-logo" onClick={closeMobileMenu}>Aamil Vahora</a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Experiences'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experiences
              </Link>
            </li>
            <li className='nav-item'>
            <Link to='/Education' className='nav-links' onClick={closeMobileMenu}>
              <img src={logo} alt="Education" style={{ width: '50px' }} /> 
            </Link>
          </li>
            <li>
              <Link
                to='/AboutMe'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>About ME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;