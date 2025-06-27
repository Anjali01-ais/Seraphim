import { useEffect, useState } from "react";
import AboutHeader from "../../components/headers/AboutHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

const facts = [
  "Over 2 billion people around the world lack access to safe drinking water. Simple actions can make a big difference in addressing this global issue.",
  "Mental health disorders affect 1 in 4 people globally. It’s important to talk about mental health and support those who need help.",
  "More than 800 million people worldwide are living in extreme poverty. Awareness and collective action can help end this cycle.",
  "Gender inequality affects all areas of life: education, employment, health, and political participation. The fight for gender equality is a fundamental human rights issue.",
  "Climate change is already having real-world impacts: rising sea levels, extreme weather events, and loss of biodiversity. Every action we take can help reduce these effects.",
  "Child labor is still a serious problem in many countries. Over 150 million children are involved in child labor around the world, and awareness is the first step to ending it.",
  "Each year, millions of animals are trafficked for illegal purposes, causing harm to biodiversity. Conserving wildlife is essential to maintaining ecological balance.",
  "Only 9% of plastic is recycled worldwide. Reducing plastic use and supporting recycling can have a significant impact on the environment.",
];


const AboutSection = ({ title, text, image, width = "100%", height = "auto", reverse }) => (
  <section className="py-5 bg-light fade-in">
    <div className="container">
      <div className={`row align-items-center ${reverse ? "flex-row-reverse" : ""}`}>
        <div className="col-md-6">
          <img 
            src={image} 
            className="img-fluid rounded about-section-image" 
            alt={title} 
            style={{ width: `${width}px`, height: `${height}px` }} 
          />
        </div>
        <div className="col-md-6">
          <h3 className="title">{title}</h3>
          <p className="mission-text">{text}</p>
        </div>
      </div>
    </div>
  </section>
);

const CoreValues = () => (
  <section className="py-5 fade-in">
    <div className="container">
      <h3 className="text-center title">Our Core Values</h3>
      <div className="row">
        {[
          { icon: "fas fa-users", title: "Inclusivity", text: "We value diversity and strive to create a welcoming environment for all members." },
          { icon: "fas fa-heart", title: "Empathy", text: "Empathy is at the heart of our efforts to understand and address social issues." },
          { icon: "fas fa-lightbulb", title: "Awareness", text: "We promote awareness and encourage education to drive positive change." },
        ].map((value, index) => (
          <div className="col-md-4" key={index}>
            <div className="card text-center shadow-sm p-3">
              <div>
                <i className={`${value.icon} icon`}></i>
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text mission-text">{value.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="testimonials py-5" style={{ backgroundColor: "#f8f9fa" }}>
    <div className="container">
      <h2 className="text-center mb-4">What People Say</h2>
      <div className="row">
        {[
          { text: "Seraphim opened my eyes to issues I never thought about before. The campaigns are not just informative but truly inspiring.", author: "Priya Sharma, Student" },
          { text: "Being a part of Seraphim has been a life-changing experience. It has given me a platform to make a difference.", author: "Rahul Verma, Club Member" },
          { text: "The dedication and passion of the Seraphim team are unmatched. They are doing phenomenal work for the community.", author: "Dr. Meera Gupta, Faculty Advisor" },
        ].map((testimonial, index) => (
          <div className="col-md-4" key={index}>
            <div className="testimonial text-center p-4 border rounded shadow-sm">
              <p>"{testimonial.text}"</p>
              <footer>- {testimonial.author}</footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FactSection = ({ fact }) => (
  <section className="did-you-know py-5" style={{ backgroundColor: "#f8f9fa" }}>
    <div className="container">
      <h2 className="text-center mb-4">Did You Know?</h2>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="fact-box p-4 border rounded shadow-sm" style={{ backgroundColor: "#e9ecef", fontSize: "18px", color: "#333" }}>
            {fact}
          </div>
        </div>
      </div>
    </div>
  </section>
);

function About() {
  const [fact, setFact] = useState("Loading fact...");

  useEffect(() => {
    const scrollTop = document.getElementById("scrollTop");
    window.addEventListener("scroll", () => {
      scrollTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    function showRandomFact() {
      setFact(facts[Math.floor(Math.random() * facts.length)]);
    }

    showRandomFact();
    const interval = setInterval(showRandomFact, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AboutHeader />
      <Navbar />
      <div className="container mt-4 mb-5">
        <h1 className="text-center"style={{ fontSize: "2rem" }}>About Us</h1>

        {/* About Us Section */}
        <section className="py-5 fade-in">
          <div className="container about-us-title"style={{ fontSize: "40px" }}>
            
            <p className="text-center mission-text">
              Seraphim is a college-based cultural club dedicated to raising social awareness and celebrating diverse cultures. We aim to create an inclusive space where students engage in meaningful discussions, events, and projects that foster empathy and understanding.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <AboutSection
          title="Our Mission"
          text="Seraphim's mission is to inspire students to explore cultural heritage and promote social awareness. By using empathy, knowledge, and collaboration, we strive to create a community that celebrates diversity and encourages positive social impact."
          image="images/image2.webp"
          width={600}
         height={400}

          
        />

        {/* Core Values Section */}
        <CoreValues />

        
       
    {/* Activities Section */}
    <AboutSection
      title="Our Activities "
      text="Seraphim organizes a range of activities, from cultural events and guest lectures to workshops and community service projects. Our goal is to provide students with a space to learn, engage, and contribute to meaningful social change."
      image="images/image4.jpeg"
      width={600}
      height={400}
      reverse
    />
  


          

        {/* Scroll to Top Button */}
        <button id="scrollTop" title="Scroll to top">↑</button>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Did You Know Section */}
        <FactSection fact={fact} />
      </div>
      <Footer />
    </>
  );
}

export default About;