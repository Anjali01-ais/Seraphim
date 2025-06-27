import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsExpanded(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  const navItems = [
    { path: '/', label: 'Our Work', id: 'I1' },
    { path: '/about', label: 'About Us', id: 'I2' },
    { path: '/gallery', label: 'Gallery', id: 'I3' },
    { path: '/seraphs', label: 'Seraphs', id: 'I4' },
    { path: '/contact', label: 'Contact Us', id: 'I5' },
    { path: '/donate', label: 'Donate', id: 'I6' },
    { path: '/future-plans', label: 'Future Plans', id: 'I7' }
  ];

  return (
    <nav className="navbar position-sticky top-0">
      <div className="container-fluid">
        <button 
          className="navbar-toggler" 
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`navbar-collapse ${isExpanded ? 'show' : ''}`}>
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <Link 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  to={item.path}
                  id={item.id}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}; 