const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/appointmentsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Create a schema and model for appointment
const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  eventDate: String,
  eventName: String,
  eventVenue: String,
  verified: { type: Boolean, default: false }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// POST route to add an appointment
app.post('/appointments', async (req, res) => {
  const { name, email, mobile, eventDate, eventName, eventVenue } = req.body;
  // Check if the date is already booked
  const existingAppointment = await Appointment.findOne({ eventDate, eventName });
  if (existingAppointment) {
    return res.status(409).send(`The date ${eventDate} is already booked for the event: ${eventName}.`);
  }
  const newAppointment = new Appointment({
    name,
    email,
    mobile,
    eventDate,
    eventName,
    eventVenue
  });

  try {
    await newAppointment.save();
    res.status(201).send('Appointment successfully saved');
  } catch (error) {
    res.status(500).send('Error saving appointment: ' + error.message);
  }
});

// ** GET route to fetch all appointments **
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find(); // Fetch all appointments from MongoDB
    res.status(200).json(appointments); // Send appointments data as JSON
  } catch (error) {
    res.status(500).send('Error fetching appointments: ' + error.message);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// PATCH route to update the verified status of an appointment
app.patch('/appointments/:id/verify', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { verified: true },
      { new: true } // Return the updated document
    );
    if (!updatedAppointment) {
      return res.status(404).send('Appointment not found');
    }
    res.json(updatedAppointment); // Send back the updated appointment
  } catch (error) {
    res.status(500).send('Error verifying appointment: ' + error.message);
  }
});
