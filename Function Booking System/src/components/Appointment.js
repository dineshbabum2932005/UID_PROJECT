import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AppointmentForm.css';

const Appointment = () => {
  const { eventName } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    eventDate: null,
    eventVenue: ''
  });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle date changes
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      eventDate: date
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Store appointment data in backend using a POST request
      const response = await fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          eventDate: formData.eventDate.toLocaleDateString(),
          eventName: eventName,
          eventVenue: formData.eventVenue
        }),
      });
  
      if (response.ok) {
        console.log('Appointment successfully submitted');
        navigate('/success');
      } else if (response.status === 409) { // Handle the conflict status for an already booked date
        alert(`The date ${formData.eventDate.toLocaleDateString()} is already booked for this event. Please choose another date.`);
      } else {
        console.error('Error submitting appointment:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the appointment:', error);
    }
  };
  

  return (
    <div className="appointment-form">
      <h1 >Book Your {eventName.charAt(0).toUpperCase() + eventName.slice(1)} Event</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Mobile Number:</label>
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />

        <label>Event Date:</label>
        <DatePicker selected={formData.eventDate} onChange={handleDateChange} placeholderText="Select Event Date" dateFormat="MM/dd/yyyy" className="date-picker" required />

        <label>Event Name:</label>
        <input type="text" name="eventName" value={eventName} disabled />

        <label>Event Venue:</label>
        <input type="text" name="eventVenue" value={formData.eventVenue} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;
