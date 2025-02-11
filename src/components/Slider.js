import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/Slider.css';

function Slider() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4000/movies')
      .then(response => {
        const filteredMovies = response.data.slice(0, 4);
        setMovies(filteredMovies);
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, movies]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <button className="slider-btn" onClick={handlePrev}>{"<"}</button>
      {movies.length > 0 ? (
        <div className="slider-content">
          <img 
            src={`images1/${movies[currentIndex].image}`} 
            alt={movies[currentIndex].title}
            className="slider-image"
          />
          <h3>{movies[currentIndex].title}</h3>
        </div>
      ) : (
        <p>Loading movies...</p>
      )}
      <button className="slider-btn" onClick={handleNext}>{">"}</button>
    </div>
  );
}

export default Slider;
