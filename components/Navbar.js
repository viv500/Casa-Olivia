import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false) 
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton()

  },[])

  window.addEventListener('resize', showButton)
  const [button, setButton] = useState(true)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CASA OLIVIA <i className='fab fa-typo3' />
          </Link>
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
              <Link to='/Location' className='nav-links' onClick={closeMobileMenu}>
                Location
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Menu' className='nav-links' onClick={closeMobileMenu}>
                Menu
              </Link>
            </li> 
          </ul>
          {button && <Button buttonStyle='btn--outline'> SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
