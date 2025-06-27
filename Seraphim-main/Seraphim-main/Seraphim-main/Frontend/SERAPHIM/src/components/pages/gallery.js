import { useState, useEffect } from "react";
import GalleryHeader from "../../components/headers/GalleryHeader.js";
import Navbar from "../../components/navbar.js";
import Footer from "../../components/footer.js";

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState("all");
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const images = [
    { src: "seraphim-insta/Seraphim1.jpg", category: "campaigns" },
    { src: "seraphim-insta/Seraphim2.jpg", category: "campaigns" },
    { src: "seraphim-insta/Seraphim3.jpg", category: "events" },
    { src: "images/logo.jpg", category: "events" },
    { src: "images/logo.jpg", category: "events" },
    { src: "images/logo.jpg", category: "events" },
    { src: "images/logo.jpg", category: "all" },
    { src: "images/logo.jpg", category: "all" },
    { src: "images/logo.jpg", category: "awareness" },
    { src: "images/logo.jpg", category: "awareness" },
    { src: "images/logo.jpg", category: "awareness" },
    { src: "images/logo.jpg", category: "awareness" },
    { src: "images/logo.jpg", category: "campaigns" },
    { src: "images/logo.jpg", category: "campaigns" },
    { src: "images/logo.jpg", category: "campaigns" },
    { src: "images/logo.jpg", category: "campaigns" },
    { src: "images/logo.jpg", category: "campaigns" },
    { src: "images/logo.jpg", category: "awareness" },
    { src: "images/logo.jpg", category: "campaigns" },
    { src: "images/logo.jpg", category: "campaigns" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openImageModal = (src, index) => {
    setModalImageSrc(src);
    setCurrentImageIndex(index);
    setShowImageModal(true);
    document.body.classList.add("modal-open");
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    document.body.classList.remove("modal-open");
  };

  const navigateImage = (direction) => {
    let newIndex = currentImageIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    setCurrentImageIndex(newIndex);
    setModalImageSrc(images[newIndex].src);
  };

  const filteredImages = images.filter(
    (img) => selectedAlbum === "all" || img.category === selectedAlbum
  );

  return (
    <>
      <GalleryHeader />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center my-2">
            <h2 className="title">Seraphim Gallery</h2>
          </div>
        </div>

        <div className="portfolio-menu mt-2 mb-4 text-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <button className="btn btn-outline-dark" onClick={() => setSelectedAlbum("all")}>
                All
              </button>
            </li>
            <li className="list-inline-item">
              <button className="btn btn-outline-dark" onClick={() => setSelectedAlbum("campaigns")}>
                Campaigns
              </button>
            </li>
            <li className="list-inline-item">
              <button className="btn btn-outline-dark" onClick={() => setSelectedAlbum("awareness")}>
                Awareness Programs
              </button>
            </li>
            <li className="list-inline-item">
              <button className="btn btn-outline-dark" onClick={() => setSelectedAlbum("events")}>
                Events
              </button>
            </li>
          </ul>
        </div>

        <div className="row photos">
          {filteredImages.map((img, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 item card shadow-sm mb-4">
              <img 
                className="img-fluid pic" 
                src={img.src} 
                alt="Gallery" 
                onClick={() => openImageModal(img.src, images.findIndex(i => i.src === img.src))}
              />
            </div>
          ))}
        </div>

        {showImageModal && (
          <div className="image-modal-overlay" onClick={closeImageModal}>
            <div className="image-modal-content" onClick={e => e.stopPropagation()}>
              <span className="close-btn" onClick={closeImageModal}>X</span>
              <img className="modal-image" src={modalImageSrc} alt="Gallery" />
              <div className="navigation-btns">
                <span className="prev" onClick={() => navigateImage(-1)}>&lt;</span>
                <span className="next" onClick={() => navigateImage(1)}>&gt;</span>
              </div>
            </div>
          </div>
        )}

        {showScrollTop && (
          <button id="scrollTop" className="scroll-top-btn" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;