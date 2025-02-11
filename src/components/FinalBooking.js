import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QRCodeCanvas } from 'qrcode.react'; 
import '../assets/FinalBooking.css';

const FinalBooking = () => {
  const [movie, setBookingDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await axios.get('/db.json');
        const bookingData = response.data.booking || {};
        setBookingDetails(bookingData);
      } catch (err) {
        console.error('Error fetching booking details:', err);
        setError('Failed to load booking details. Please try again later.');
      }
    };

    fetchBookingDetails();
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!movie) {
    return <div className="loading">Loading booking details...</div>;
  }

  // Generate QR Code Data
  const qrCodeData = JSON.stringify({
    movie: movie.movie,
    date: movie.date,
    time: movie.time,
    seats: movie.seats,
    bookingId: movie.bookingId,
  });

  return (
    <div className="final-booking-container">
      <h2>Booking Confirmation</h2>
      <div className="booking-details">
        <div className="qr-code">
          <QRCodeCanvas value={qrCodeData} size={150} /> {/* Use QRCodeCanvas */}
        </div>
        <div className="ticket-details">
          <p><strong>Movie:</strong> {movie.title}</p>
          <p><strong>Date:</strong> {movie.releaseDate}</p>
          <p><strong>Time:</strong> {movie.time}</p>
          <p><strong>Seats:</strong> {movie.seats}</p>
          <p><strong>Booking ID:</strong> {movie.bookingId}</p>
        </div>
      </div>
    </div>
  );
};

export default FinalBooking;


