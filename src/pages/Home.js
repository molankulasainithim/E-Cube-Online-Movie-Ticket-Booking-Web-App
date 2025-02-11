import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';
import '../assets/Home.css';

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <MovieList />
      <Footer />
    </>
  );
}

export default Home;
