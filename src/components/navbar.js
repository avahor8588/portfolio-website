import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './umbcLogo.png'; 
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/AboutMe" className="navbar-logo" onClick={closeMobileMenu}>Aamil Vahora</Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item dropdown-parent'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
              <span className='nav-links dropdown-trigger' role='button' aria-haspopup='true' aria-expanded={dropdown} onClick={() => setDropdown((v) => !v)}>
                Experiences <i className='fas fa-caret-down' />
              </span>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <Link to='/Education' className='nav-links' onClick={closeMobileMenu}>
                <img src={logo} alt="Education" style={{ width: '50px' }} /> 
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/AboutMe' className='nav-links-mobile' onClick={closeMobileMenu}>
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
