import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/NearbyEvents.css';
import { useNavigate } from 'react-router-dom';

const NearbyEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/db.json');
        setEvents(response.data.events || []);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (id) => {
    navigate(`/events/${id}`);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="events-container">
      <h2>Nearby Events</h2>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card" onClick={() => handleEventClick(event.id)}>
            <img src={event.image} alt={event.name} className="event-image" />
            <h3>{event.name}</h3>
            <p>{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyEvents;
