import { useState } from "react";
import "./Carrousel.scss";
import PropTypes from "prop-types";

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null; // Si aucune image, ne rien afficher
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      <button onClick={prevSlide} className="prev">
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      <button onClick={nextSlide} className="next">
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  images: PropTypes.string.isRequired,
};

export default Carrousel;
