import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="header-content">
        <h1><Link to="/">Ghanashyam Khanal</Link></h1>
        <nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/cricket" className={location.pathname === '/cricket' ? 'active' : ''}>Cricket</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;