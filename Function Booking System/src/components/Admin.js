import React, { useEffect, useState } from 'react';
import './Admin.css'; // Import the updated CSS file

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [verifiedAppointments, setVerifiedAppointments] = useState([]);

  // Fetch appointments from the backend on component mount
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:5000/appointments');
        if (response.ok) {
          const data = await response.json();
          // Separate the verified and unverified appointments
          const pending = data.filter(appointment => !appointment.verified);
          const verified = data.filter(appointment => appointment.verified);
          setAppointments(pending); // Set pending appointments
          setVerifiedAppointments(verified); // Set verified appointments
        } else {
          console.error('Failed to fetch appointments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []); // Empty dependency array ensures the fetch is only called once

  // Handle verification of an appointment
  const handleVerify = async (id) => {
    try {
      // Update the appointment status to verified in the backend
      const response = await fetch(`http://localhost:5000/appointments/${id}/verify`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const updatedAppointment = await response.json();
        // Move the verified appointment from pending to verified list
        setAppointments(appointments.filter(appointment => appointment._id !== id));
        setVerifiedAppointments([...verifiedAppointments, updatedAppointment]);
      } else {
        console.error('Failed to verify appointment:', response.statusText);
      }
    } catch (error) {
      console.error('Error verifying appointment:', error);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <h2>New Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              <p><strong>Name:</strong> {appointment.name}</p>
              <p><strong>Email:</strong> {appointment.email}</p>
              <p><strong>Mobile:</strong> {appointment.mobile}</p>
              <p><strong>Event Date:</strong> {appointment.eventDate}</p>
              <p><strong>Event Name:</strong> {appointment.eventName}</p>
              <p><strong>Event Venue:</strong> {appointment.eventVenue}</p>
              <button onClick={() => handleVerify(appointment._id)}>Verify</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No new appointments available.</p>
      )}

      <h2>Verified Appointments</h2>
      {verifiedAppointments.length > 0 ? (
        <ul>
          {verifiedAppointments.map((appointment) => (
            <li key={appointment._id}>
              <p><strong>Name:</strong> {appointment.name}</p>
              <p><strong>Email:</strong> {appointment.email}</p>
              <p><strong>Mobile:</strong> {appointment.mobile}</p>
              <p><strong>Event Date:</strong> {appointment.eventDate}</p>
              <p><strong>Event Name:</strong> {appointment.eventName}</p>
              <p><strong>Event Venue:</strong> {appointment.eventVenue}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No verified appointments available.</p>
      )}
    </div>
  );
};

export default Admin;
