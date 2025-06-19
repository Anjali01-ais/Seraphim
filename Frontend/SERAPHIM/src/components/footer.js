import "../CSS/index.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
         Seraphim<br/>
    A Social Awareness Club<br/>
    Indian Institute Of Information Technology<br/>
    Lucknow - 226002, Uttar Pradesh, India.<br/>
    Contact Us: seraphim@iiiti.ac.in
        </div>
        <div className="social">
          <a href="#"><img src="images/facebook-icon.png" alt="Facebook" /></a>
          <a href="#"><img src="images/twitter-icon.png" alt="Twitter" /></a>
          <a href="#"><img src="images/youtube-icon.png" alt="YouTube" /></a>
          <a href="https://www.instagram.com/seraphim_iiitl/"><img src="images/instagram-icon.png" alt="Instagram" /></a>
          <a href="#"><img src="images/linkedin-icon.png" alt="LinkedIn" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;