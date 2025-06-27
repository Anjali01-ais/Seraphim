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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          donationAmount: parseInt(formData.donationAmount), 
        }),
      });

      const text = await response.text();

      if (response.ok) {
        alert(' Success: ' + text);
        setFormData({
          fullName: '',
          email: '',
          donationAmount: '',
          paymentMethod: '',
        });
      } else {
        alert(' Error: ' + text);
        console.error('Server error:', text);
      }
    } catch (error) {
      alert('Request failed: ' + error.message);
      console.error('Network error:', error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="donate-page">
      <DonateHeader />
      <Navbar />
      <div className="donation-header">
        <h1>Support Seraphim</h1>
        <p>Your contribution fuels cultural empowerment and social change.</p>
      </div>

      <main className="container my-4">
        <section className="donation-form" id="form">
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

