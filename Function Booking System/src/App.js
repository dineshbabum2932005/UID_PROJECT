import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EventDetails from './components/EventDetails';
import Appointment from './components/Appointment';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login'; 
import Success from './components/Success.js';
import Admin from './components/Admin.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:eventName" element={<EventDetails />} />
        <Route path="/appointment/:eventName" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
