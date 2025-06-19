import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home.js";
import About from "./components/pages/about.js";
import Gallery from "./components/pages/gallery.js";
import Donate from "./components/pages/donate.js";
import ContactUs from "./components/pages/contactUs.js";
import FuturePlans from "./components/pages/FuturePlans.js";
import Seraphs from "./components/pages/seraphs.js";
import Partners from "./components/pages/Partners.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/future-plans" element={<FuturePlans />} />
        <Route path="/seraphs" element={<Seraphs />} />
        <Route path="/partners" element={<Partners />} /> 
      </Routes>
    </Router>
  );
}

export default App;