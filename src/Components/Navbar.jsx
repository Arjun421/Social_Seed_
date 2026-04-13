import React from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <div className="logo-icon">S</div>
          <span className="logo-text">SocialSeed</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/network">Network</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Search..." />
        </div>
        <Link to="/login"><button className="btn-outline">Log In</button></Link>
        <Link to="/signup"><button className="btn-primary">Sign Up</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;
