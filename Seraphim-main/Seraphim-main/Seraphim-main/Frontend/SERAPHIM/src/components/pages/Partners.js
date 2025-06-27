import { useState } from "react";
import PartnersHeader from "../../components/headers/PartnersHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

const Partners = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [partners, setPartners] = useState([
    {
      name: "Suryodaya NGO",
      description: "An amazing organization that works for underprivileged children and community upliftment.",
      image: "https://media.istockphoto.com/id/537311780/photo/unity-of-indian-children-asia.jpg?s=1024x1024&w=is&k=20&c=J-ieaHhBhiAiuZliJNBwymxYBcYKvwUXTiUzu3Jwzik=",
      alt: "Suryodaya NGO"
    },
    {
      name: "Vriksharopan",
      description: "They contributed to our environmental awareness campaigns and tree plantation drives.",
      image: "https://images.unsplash.com/photo-1747582411588-f9b4acabe995?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0",
      alt: "Vriksharopan NGO"
    },
    {
      name: "Swashtyashresdhapunji",
      description: "A dedicated partner promoting health and wellness awareness across diverse communities.",
      image: "https://as1.ftcdn.net/v2/jpg/04/68/47/46/1000_F_468474640_YcXTQsmw1U2sqnFG8vZyTq8SyoYsbvva.jpg",
      alt: "Swashtyashresdhapunji"
    }
  ]);

  const [newNgo, setNewNgo] = useState({
    name: "",
    description: "",
    imageUrl: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewNgo(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNgo.name && newNgo.description && newNgo.imageUrl) {
      // Add new partner to state
      setPartners([
        ...partners,
        {
          name: newNgo.name,
          description: newNgo.description,
          image: newNgo.imageUrl,
          alt: newNgo.name
        }
      ]);

      // Reset form state (equivalent to ngoForm.reset())
      setNewNgo({
        name: "",
        description: "",
        imageUrl: ""
      });
    }
  };

  return (
    <div className={darkTheme ? "dark-theme" : ""}>
      <PartnersHeader />
      <Navbar />

      <div className="text-center mb-3">
        <h1 id="Heading">Our Partners</h1>
      </div>

      <div className="container mt-4 mb-5">
        <div className="row justify-content-center g-4">
          {partners.map((partner, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={partner.image}
                  className="card-img-top p-3"
                  alt={partner.alt}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{partner.name}</h5>
                  <p className="card-text">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4 mb-5">
        <div className="mt-5 d-flex justify-content-center">
          <div className="form-wrapper">
            <h3 className="text-center mb-3">Add Your NGO</h3>
            <form
              id="ngoForm"
              className="p-3 border rounded bg-light"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control mb-2"
                id="name"
                placeholder="NGO Name"
                required
                value={newNgo.name}
                onChange={handleInputChange}
              />
              <textarea
                className="form-control mb-2"
                id="description"
                placeholder="Description"
                required
                value={newNgo.description}
                onChange={handleInputChange}
              />
              <input
                className="form-control mb-2"
                id="imageUrl"
                placeholder="Image URL"
                required
                value={newNgo.imageUrl}
                onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <button id="scrollTop" title="Scroll to top">↑</button>

      <Footer />
    </div>
  );
};

export default Partners;
