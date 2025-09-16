import React, { useRef, useEffect, useState } from 'react';
import '../styles/slider.css';
import img1 from '../assets/scroll1.jpg';
import img2 from '../assets/scroll2.jpg';
import img3 from '../assets/scroll3.jpg';

const Carousel = () => {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const images = [img1, img2, img3];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!hovering) startAutoSlide();
    return () => stopAutoSlide();
  }, [hovering]);

  useEffect(() => {
    const track = trackRef.current;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="carousel-track" ref={trackRef}>
        {images.map((img, i) => (
          <div className="carousel-item" key={i}>
            <img src={img} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button onClick={prevSlide}>❮</button>
        <button onClick={nextSlide}>❯</button>
      </div>

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
