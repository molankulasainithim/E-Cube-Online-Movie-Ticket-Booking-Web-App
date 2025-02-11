import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/EventDetails.css';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get('/db.json');
        const eventData = response.data.events.find((e) => e.id === parseInt(id));
        setEvent(eventData);
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError('Failed to fetch event details. Please try again later.');
      }
    };

    fetchEventDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-details-container">
      <h2>{event.name}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
    </div>
  );
};

export default EventDetails;
