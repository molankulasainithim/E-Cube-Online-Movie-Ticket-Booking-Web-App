import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import '../assets/MovieDetails.css';

Modal.setAppElement('#root');

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [seatCount, setSeatCount] = useState(1);


  useEffect(() => {
    axios.get(`http://localhost:4000/movies/${id}`)
      .then(response => {
        console.log('Fetched Movie:', response.data);
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error.message);
        setError('Failed to fetch movie details. Please try again later.');
      });
  }, [id]);

  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    navigate('/final-booking')
  }

  const handleBooking = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmBooking = () => {
    alert(`Booking confirmed for ${seatCount} seats on ${selectedDate} at ${selectedTime}`);
    setIsModalOpen(false);
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <header className="navbar">Movie Details</header>
      <div className="movie-details">
        <img src={`/details/${movie.image}`} alt={movie.title} className="movie-image" />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Ratings:</strong> {movie.ratings}</p>
          <button onClick={handleBooking} className="book-button">Book Now</button>

        <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Ticket Booking">
        <h2>Book Tickets for {movie.title}</h2>
        <label>Date: </label>
        <input 
          type="date" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)} 
        />

        <label>Available Show Timings: </label>
        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
          <option value="">Select Time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
        </select>

        <label>Choose Number of Seats: </label>
        <input 
          type="number" 
          min="1" 
          value={seatCount} 
          onChange={(e) => setSeatCount(e.target.value)} 
        />

        <div style={{ marginTop: '20px' }}>
          <button className='confirm' onClick={handleConfirmBooking}>Confirm Booking</button> 
          <button className='cancel' onClick={closeModal}>Cancel</button>
        </div>
      </Modal>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;


