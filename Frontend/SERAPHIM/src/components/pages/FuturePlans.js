import { useEffect, useState } from "react";
import FutureHeader from "../../components/headers/FutureHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

const initiatives = [
  { title: "Save Lives", description: "Our Blood Bank Initiative is dedicated to ensuring a stable and safe blood supply for those in need.", img: "images/Blood-Bank.png" },
  { title: "Feed the Future", description: "Our Food Donation Initiative aims to fight hunger and reduce food waste by distributing surplus food to those in need.", img: "images/Food.png" },
  { title: "Nurturing Nature", description: "Our Tree Planting Initiative is dedicated to combating climate change and fostering a sustainable environment.", img: "images/PlantingTrees.png" },
  { title: "Adopt and Heal", description: "Our initiative to adopt injured animals is dedicated to giving them a second chance at life.", img: "images/Adopting_Animals.png" },
  { title: "Empowering Minds", description: "Our mission is to make quality education accessible to every child, regardless of their socio-economic background.", img: "images/Education.png" },
  { title: "Water For All", description: "Our Free Clean Drinking Water Initiative is dedicated to providing safe and clean drinking water to communities in need.", img: "images/Drinking_Water.png" },
];

function FuturePlans() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <>
      <FutureHeader />
      <Navbar />
      <div className={`container my-5 ${theme}`}>
        

        {/* Initiatives Section */}
        <div className="row">
          {initiatives.map((initiative, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <img src={initiative.img} className="card-img-top" alt={initiative.title} />
                <div className="card-body">
                  <h5 className="card-title">{initiative.title}</h5>
                  <p className="card-text">{initiative.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FuturePlans;