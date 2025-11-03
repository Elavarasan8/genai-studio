import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="GenAI Studio Logo - Enterprise Generative AI Platform" />
          </Link>
          <ul className="nav-menu">
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/about" className={isActive('/about')}>About</Link></li>
            <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
            <li><Link to="/solutions" className={isActive('/solutions')}>Solutions</Link></li>
            <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

