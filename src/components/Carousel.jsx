import React, { useState } from 'react';


const Carousel = () => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of images in the carousel
  const images = [
    'https://via.placeholder.com/600x300?text=Image+1',
    'https://via.placeholder.com/600x300?text=Image+2',
    'https://via.placeholder.com/600x300?text=Image+3',
  ];

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevImage}>
        &#10094;
      </button>
      <div className="carousel">
        <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} />
      </div>
      <button className="carousel-btn next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;