// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = ({ brandName = 'abc', navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">{brandName}</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <ScrollLink
            key={link.path}
            to={link.path}
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            className="nav-link"
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </ScrollLink>
        ))}
      </div>

      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
