// src/components/About.js
import React from 'react';
import './About.css';  // Optionally, create and import a separate CSS file for styling.
import eventImage from '../components/images/event3.jpg';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Function Booking System! We specialize in helping you plan and organize
        memorable events like marriages, birthdays, farewells, reunions, and more. Our platform
        ensures that your special moments are celebrated with elegance and care..💖
      </p>
      <img src={eventImage} alt="Event" className="about-image" />
<p>
        With customizable options and a seamless booking process, we take the stress out of event planning.
        Contact us today to learn more about our services and packages.💐
      </p>
    </div>
  );
}

export default About;
