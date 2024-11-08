import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Booking System</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>

        <li><Link to="/contact">Contact</Link>  </li>
        <li><Link to="/login" className="nav-login">Login</Link></li>
        
      </ul>
      
    </nav>
  );
}

export default Navbar;