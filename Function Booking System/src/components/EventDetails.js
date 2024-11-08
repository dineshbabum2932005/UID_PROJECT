import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventDetails.css';

// Image Imports
import marriageImage from './images/wed2.jpg';
import birthdayImage from './images/bday1.jpg'; // Add appropriate images for other events
import farewellImage from './images/fare1.webp';
import earpiercingImage from './images/baby.png';
import reunionImage from './images/Reunion2.png';

const EventDetails = () => {
  const { eventName } = useParams();

  // Event data content
  const eventContent = {
    marriage: {
      title: "Marriage",
      content: "Welcome to our ❤️Marriage Management❤️",
      description: "Celebrate Love with Elegance and Grace. Your dream wedding awaits… 💖",
      image: marriageImage,
    },
    birthday: {
      title: "Birthday",
      content: "🎉💐 Let's Celebrate! 💐🎉",
      description: "Make birthdays unforgettable with our unique offers and packages! 💝",
      image: birthdayImage,
    },
    farewell: {
      title: "Farewell",
      content: "Goodbyes, with Style.",
      description: "Plan a farewell event that leaves an everlasting impression...💖💐",
      image: farewellImage,
    },
    earpiercing: {
      title: "Ear Piercing",
      content: "Tiny Sparkles, Big Moments.",
      description: "Discover the safe and stylish way to mark this special milestone.",
      image: earpiercingImage,
    },
    reunion: {
      title: "Reunion",
      content: "Together Again.",
      description: "Celebrate reunions with joy and warmth in an unforgettable way.",
      image: reunionImage,
    },
  };

  const event = eventContent[eventName] || {};

  return (
    <div className="event-details">
      <h2 className="event-title">{event.title}</h2>
      <p className="event-content">{event.content}</p>
      {event.image && <img src={event.image} alt={event.title} className="event-image" />}
      <p className="event-description">{event.description}</p>
      <Link to={`/appointment/${eventName}`} className="appointment-button">
        Book an Appointment
      </Link>
    </div>
  );
};

export default EventDetails;
