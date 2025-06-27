import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-md-3 mt-md-3">
            <p className="mb-1">Seraphim</p>
            <p className="mb-1">A Social Awareness Club</p>
            <p className="mb-1">Indian Institute Of Information Technology</p>
            <p className="mb-1">Lucknow - 226002, Uttar Pradesh, India.</p>
            <p>Contact Us: E-mail: <a href="mailto:seraphim@iiitl.ac.in">seraphim@iiitl.ac.in</a></p>
          </div>
          <div className="col-md-6 text-md-end social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/seraphim_iiitl/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 