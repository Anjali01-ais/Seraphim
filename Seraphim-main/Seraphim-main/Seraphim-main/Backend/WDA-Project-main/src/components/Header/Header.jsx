import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header-top">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-2 header-logo">
            <img src="/images/logo.jpg" alt="Seraphim Logo" className="img-fluid" />
          </div>
          <div className="col-10 header-text">
            <h1>Seraphim</h1>
            <h2>A Social Awareness Club</h2>
            <p>Indian Institute of Information Technology, Lucknow</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 