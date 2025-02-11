import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import '../assets/MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/movies')
      .then(response => setMovies(response.data.slice(0,4)));
  }, []);

  return (
    <div >
      <h2 className='position'>Recommended Movies</h2>
      <div className='movie-list'>
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
