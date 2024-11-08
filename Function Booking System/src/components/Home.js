import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import marriageImage from './images/mer.jpg';
import birthdayImage from './images/bday.jpg';
import farewellImage from './images/farewell.jpg';
import earpiercingImage from './images/baby.png';
import reunionImage from './images/reunion.webp';

const Home = () => {
  return (
    <div className="home">
      <h1>Our Functions</h1>
      <div className="event-cards">
        <Link to="/details/marriage" className="event-card">
          <img src={marriageImage} alt="Marriage" />
          <h2>Marriage</h2>
          <p>Discover our marriage specifications and offers.</p>
        </Link>
        <Link to="/details/birthday" className="event-card">
          <img src={birthdayImage} alt="Birthday" />
          <h2>Birthday</h2>
          <p>Discover our birthday specifications and offers.</p>
        </Link>
        <Link to="/details/farewell" className="event-card">
          <img src={farewellImage} alt="Farewell" />
          <h2>Farewell</h2>
          <p>Discover our farewell specifications and offers.</p>
        </Link>
        <Link to="/details/earpiercing" className="event-card">
          <img src={earpiercingImage} alt="Ear Piercing" />
          <h2>Ear Piercing</h2>
          <p>Discover our ear piercing specifications and offers.</p>
        </Link>
        <Link to="/details/reunion" className="event-card">
          <img src={reunionImage} alt="Reunion" />
          <h2>Reunion</h2>
          <p>Discover our reunion specifications and offers.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
