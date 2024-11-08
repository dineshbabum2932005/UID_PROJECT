import React from "react";
import "./AdminPage.css";

const AdminPage = ({ appointments }) => {
  return (
    <div className="admin-page-container">
      <h1>Admin Dashboard</h1>
      <h2>Total User Appointments: {appointments.length}</h2>

      <div className="appointments-list">
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index} className="appointment-item">
                <h3>Appointment {index + 1}</h3>
                <p><strong>Name:</strong> {appointment.name}</p>
                <p><strong>Email:</strong> {appointment.email}</p>
                <p><strong>Mobile:</strong> {appointment.mobile}</p>
                <p><strong>Event Date:</strong> {appointment.eventDate.toLocaleDateString()}</p>
                <p><strong>Event Name:</strong> {appointment.eventName}</p>
                <p><strong>Event Venue:</strong> {appointment.eventVenue}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No appointments available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
