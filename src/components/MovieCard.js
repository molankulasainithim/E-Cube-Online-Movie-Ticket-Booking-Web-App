import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/MovieCard.css';

function MovieCard({ movie }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card">
      <img src={`images/${movie.image}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={handleBook} className="book-button">Book</button>
    </div>
  );
}

export default MovieCard;



