import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/LatestMovies.css';
import MovieCard from './MovieCard';

function LatestMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] =useState('');

  useEffect(() => {
    axios.get('http://localhost:4000/movies')
      .then(response => {setMovies(response.data.slice(0, 7));
      })
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

return (
  <div className="latest-movies">
    <h1>Latest Movies</h1>
    <div className="movies-container">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);
}

export default LatestMovies;