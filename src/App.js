import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import LatestMovies from './components/LatestMovies';
import MovieDetails from './components/MovieDetails';
import NearbyEvents from './components/NearbyEvents';
import EventDetails from './components/EventDetails';
import FinalBooking from './components/FinalBooking';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <MovieList />
          </>
        } />
        <Route path="/latest-movies" element={<LatestMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/events" element={<NearbyEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/final-booking" element={<FinalBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
