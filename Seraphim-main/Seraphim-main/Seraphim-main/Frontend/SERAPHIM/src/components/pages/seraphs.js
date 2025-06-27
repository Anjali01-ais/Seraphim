import { useState, useEffect } from 'react';
import Header from '../../components/headers/SeraphsHeader.js';
import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';

const Seraphs = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Header />
      <Navbar />
      
      <div className="seraphs">
        <h1>Coordinators</h1>
        <div className="cards">
          <div className="card">
            <div className="card-border">
              <img src="images/C1_page.jpg" alt="Shanu Singh Bhadouriya" />
            </div>
            <div className="card-info">
              <h2>Shanu Singh Bhadouriya</h2>
              <p>Coordinator</p>
              <a href="https://www.instagram.com/seraphim_iiitl/" className="btn">
                <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-border">
              <img src="images/C2_page.jpg" alt="Parag Dadhich" />
            </div>
            <div className="card-info">
              <h2>Parag Dadhich</h2>
              <p>Coordinator</p>
              <a href="https://www.instagram.com/seraphim_iiitl/" className="btn">
                <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        
        <br />
        
        <h1>Senior Members</h1>
        <div className="container second">
          <div className="card">
            <div className="card-border">
              <img src="images/S1_page-0001.jpg" alt="Prisha Baveja" />
            </div>
            <div className="card-info">
              <h2>Prisha Baveja</h2>
              <p>Community Service</p>
              <a href="https://www.instagram.com/seraphim_iiitl/" className="btn">
                <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-border">
              <img src="images/S2_page-0001.jpg" alt="Riddhi Agrawal" />
            </div>
            <div className="card-info">
              <h2>Riddhi Agrawal</h2>
              <p>Design & Content</p>
              <a href="https://www.instagram.com/seraphim_iiitl/" className="btn">
                <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="card"id="card"> 
            <div className="card-border">
              <img src="images/S3_page-0001 (1).jpg" alt="Tanishq Sahu" />
            </div>
            <div className="card-info">
              <h2>Tanishq Sahu</h2>
              <p>Public Relations</p>
              <a href="https://www.instagram.com/seraphim_iiitl/" className="btn">
                <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="card"id="card">
            <div className="card-border">
              <img src="images/S4_page-0001.jpg" alt="Sahil Sharma" />
            </div>
            <div className="card-info">
              <h2>Sahil Sharma</h2>
              <p>Public Relations</p>
              <a href="https://www.instagram.com/seraphim_iiitl/" className="btn">
                <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="card"id="card">
            <div className="card-border">
              <img src="images/S5_page-0001.jpg" alt="Sanskar Sahu" />
            </div>
            <div className="card-info">
              <h2>Sanskar Sahu</h2>
              <p>Events Planning</p>
              <a href="https://www.instagram.com/seraphim_iiitl/" className="btn">
                <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
          <div className="card"id="card">
            <div className="card-border">
              <img src="images/S6_page-0001.jpg" alt="Dhruv Bharuka" />
            </div>
            <div className="card-info">
              <h2>Dhruv Bharuka</h2>
              <p>Events Planning</p>
              <a href="https://www.instagram.com/seraphim_iiitl/" className="btn">
                <img src="images/instagram-icon.png" alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
      {showScrollTop && (
        <button id="scrollTop" onClick={scrollToTop}>↑</button>
      )}
    </div>
  );
};

export default Seraphs;