import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import './FuturePlans.css';

const FuturePlans = () => {
  const [theme, setTheme] = useState('Light');
  const [suggestion, setSuggestion] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleThemeChange = () => {
    setTheme(prevTheme => prevTheme === 'Light' ? 'Dark' : 'Light');
  };

  const handleSuggestionSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(suggestion)
      });

      if (response.ok) {
        alert("Thank you for your suggestion!");
        setSuggestion({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting suggestion.");
    }
  };

  const handleInputChange = (e) => {
    setSuggestion({
      ...suggestion,
      [e.target.id]: e.target.value
    });
  };

  const plans = [
    {
      title: "Save Lives",
      image: "images/Blood-Bank.png",
      description: "Our Blood Bank Initiative is dedicated to ensuring a stable and safe blood supply for those in need. By donating blood, you can make a life-saving difference"
    },
    {
      title: "Feed the Future",
      image: "images/Food.png",
      description: "Our Food Donation Initiative aims to fight hunger and reduce food waste by distributing surplus food to those in need."
    },
    {
      title: "Nurturing Nature",
      image: "images/PlantingTrees.png",
      description: "Our Tree Planting Initiative is dedicated to combating climate change and fostering a sustainable environment."
    },
    {
      title: "Adopt and Heal",
      image: "images/Adopting_Animals.png",
      description: "Our initiative to adopt injured animals is dedicated to giving them a second chance at life."
    },
    {
      title: "Empowering Minds",
      image: "images/Education.png",
      description: "Our mission is to make quality education accessible to every child, regardless of their socio-economic background."
    },
    {
      title: "Water For All",
      image: "images/Drinking_Water.png",
      description: "Our Free Clean Drinking Water Initiative is dedicated to providing safe and clean drinking water to communities in need."
    }
  ];

  return (
    <div className={`future-plans ${theme.toLowerCase()}`}>
      <Header />
      <Navbar />
      
      <div className="content-wrapper">
        <div className="heading-section">
          <h1 className="heading">Our Future Plans</h1>
          <button 
            className={`btn ${theme === 'Light' ? 'btn-outline-dark' : 'btn-outline-light'}`}
            onClick={handleThemeChange}
          >
            Change Theme
          </button>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <div className="card mb-3 hovering">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={plan.image} className="img-fluid rounded-start" alt={plan.title} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{plan.title}</h5>
                      <p className="card-text">{plan.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="suggestion-section">
          <h3>Have a suggestion for us?</h3>
          <form onSubmit={handleSuggestionSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                id="name"
                value={suggestion.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                id="email"
                value={suggestion.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Your Suggestion"
                id="message"
                rows="4"
                value={suggestion.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit Suggestion</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FuturePlans; 