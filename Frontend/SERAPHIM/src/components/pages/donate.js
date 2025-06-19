import { useState, useEffect } from 'react';
import DonateHeader from '../../components/headers/DonateHeader';
import Navbar from '../../components/navbar.js';
import Footer from '../../components/footer.js';

function Donate() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    donationAmount: '',
    paymentMethod: ''
  });
  const [quote, setQuote] = useState('Loading quote...');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quotes = [
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "Alone we can do so little; together we can do so much. – Helen Keller",
    "Act as if what you do makes a difference. It does. – William James",
    "It always seems impossible until it's done. – Nelson Mandela"
  ];

  useEffect(() => {
    const showRandomQuote = () => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    showRandomQuote();
    const quoteInterval = setInterval(showRandomQuote, 7000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(quoteInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="donate-page">
      {/* Header at the absolute top */}
      <DonateHeader />
      
      {/* Navbar below header */}
      <Navbar />
      <div className="donation-header">
      <h1>Support Seraphim</h1>
      <p>Your contribution fuels cultural empowerment and social change.</p>
    </div>
  
      
      <main className="container my-4" >
        <section className="donation-form"id="form">
          <h2 className="text-center mb-4">Make a Donation</h2>
          <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="donationAmount" className="form-label">Donation Amount</label>
              <input
                type="number"
                className="form-control"
                id="donationAmount"
                name="donationAmount"
                placeholder="Enter amount in INR"
                value={formData.donationAmount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
              <select
                className="form-select"
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a payment method</option>
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank_transfer">Bank Transfer</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Donate Now</button>
          </form>
        </section>

        <section className="py-5 mb-5 rounded">
          <div className="container">
            <h2 className="text-center mb-4">Quotes of the Day</h2>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="quote-box p-4 border rounded shadow-sm">
                  {quote}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials py-5">
          <div className="container">
            <h2 className="text-center mb-4">Impact Stories</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <blockquote className="blockquote p-3 bg-white rounded shadow-sm">
                  <p className="mb-2">"Thanks to Seraphim, I now have access to educational resources I never thought possible."</p>
                  <footer className="blockquote-footer mt-2">A beneficiary</footer>
                </blockquote>
              </div>
              <div className="col-md-4 mb-4">
                <blockquote className="blockquote p-3 shadow-sm">
                  <p className="mb-2">"The cultural programs taught me to appreciate diversity and community."</p>
                  <footer className="blockquote-footer mt-2">A participant</footer>
                </blockquote>
              </div>
              <div className="col-md-4 mb-4">
                <blockquote className="blockquote p-3 bg-white rounded shadow-sm">
                  <p className="mb-2">"I feel inspired to give back after attending their outreach events."</p>
                  <footer className="blockquote-footer mt-2">A volunteer</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="motivational-text p-4 mb-5 bg-light rounded">
          <h2 className="mb-3">Why Your Donation Matters</h2>
          <p>
            At Seraphim, we believe in the transformative power of culture and social awareness.
            Your support helps us:
          </p>
          <ul className="list-unstyled">
            <li className="mb-2">🎭 Organize cultural events that celebrate diversity.</li>
            <li className="mb-2">📚 Conduct workshops to educate and empower our community.</li>
            <li className="mb-2">🤝 Support underprivileged individuals with our outreach programs.</li>
          </ul>
          <p className="mt-3">
            Every donation—big or small—makes a real difference. Together, we can create a brighter future.
            Be a part of this journey. Donate today!
          </p>
        </section>
      </main>

      <Footer />

      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}

export default Donate;