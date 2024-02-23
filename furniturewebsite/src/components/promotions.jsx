import React, { useState } from 'react';
import './styles.css'; 

const Promotion = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container1">
      <button onClick={goToPrevious} className="carousel-button prev-button">&lt;</button>
      <div className="carousel-slide2">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button onClick={goToNext} className="carousel-button next-button">&gt;</button>
    </div>
  );
};

export default Promotion;
