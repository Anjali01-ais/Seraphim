import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FuturePlans from './components/FuturePlans/FuturePlans';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/future-plans" element={<FuturePlans />} />
          {/* Add other routes here as they are converted to React components */}
          <Route path="/" element={<FuturePlans />} /> {/* Temporary redirect to FuturePlans */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; 