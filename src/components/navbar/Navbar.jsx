import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/movies'}>Movies</NavLink>
    </nav>
  );
}

export default Navbar;
