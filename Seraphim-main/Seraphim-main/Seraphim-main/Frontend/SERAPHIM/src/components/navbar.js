import { Link } from "react-router-dom";
import "../CSS/index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
         <li><Link to="/" className="nav-link">Register</Link></li>
        <li><Link id="I1" to="/home">Our Work</Link></li>
        <li><Link id="I2" to="/about">About Us</Link></li>
        <li><Link id="I3" to="/gallery">Gallery</Link></li>
        <li><Link id="I4" to="/seraphs">Seraphs</Link></li>
        <li><Link id="I5" to="/contact-us">Contact Us</Link></li>
        <li><Link id="I6" to="/donate">Donate</Link></li>
        <li><Link id="I7" to="/future-plans">Future Plans</Link></li>
       <li><Link id="I8" to="/Partners">Partners</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;