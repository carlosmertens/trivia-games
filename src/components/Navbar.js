import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.png';

export const Navbar = ({ handleReset }) => {
  return (
    <nav className='navbar navbar-light bg-transparent'>
      <Link to='/' onClick={handleReset} className='navbar-brand'>
        <img
          src={Logo}
          width='30'
          height='30'
          className='d-inline-block align-top mr-1'
          alt='logo'
        />
        Trivia Game
      </Link>
    </nav>
  );
};
