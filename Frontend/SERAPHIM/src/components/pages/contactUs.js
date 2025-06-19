import { useEffect, useState } from "react";
import ContactHeader from "../../components/headers/ContactHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

function ContactUs() {
  // Form Handling
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setFormMessage("Please fill out all fields.");
    } else {
      setFormMessage(`Thank you, ${name}! Your message has been sent.`);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <>
      <ContactHeader />
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center title">Get in Touch</h2>
          
         <div className="row">
          <div className="col-md-6" id="form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control full width" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange}style={{width:"100% !important"
    
             }} required />

              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />

              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />

              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Your message" value={formData.message} onChange={handleChange} required></textarea>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>
              <p style={{ color: formMessage.includes("Thank you") ? "green" : "red" }}>{formMessage}</p>
            </form>
          </div>

          {/* Contact Details */}
          
          <div className="col-md-6" id="form">
            <h4>Contact Details</h4>
            <p><i className="fas fa-map-marker-alt me-2 text-dark"></i>IIIT Lucknow, Lucknow, Uttar Pradesh</p>
            <p><i className="fas fa-phone me-2 text-dark"></i>+91 906841XXXX</p>
            <p><i className="fas fa-envelope me-2 text-dark"></i><a href="mailto:seraphim@iiitl.ac.in" className="text-decoration-none text-dark">seraphim@iiitl.ac.in</a></p>

            <h4>Follow Us</h4>
            <a href="#" className="text-primary me-2"><i className="fab fa-facebook fa-2x"></i></a>
            <a href="#" className="text-info me-2"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="https://www.instagram.com/seraphim_iiitl/" className="text-danger me-2"><i className="fab fa-instagram fa-2x"></i></a>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="container text-center py-5 bg-light">
        <h2 className="title">Find Us Here</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.306063631539!2d81.02148777514117!3d26.798381564995086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1730187481871!5m2!1sen!2sin"
          style={{ border: "0", height: "300px", width: "85vw" }} allowFullScreen="" loading="lazy"></iframe>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;