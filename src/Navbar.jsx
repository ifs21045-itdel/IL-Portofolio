// import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">My Portfolio</h1>
      <ul className="navbar-links">
        <li><a href="#intro">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
