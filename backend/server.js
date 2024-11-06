const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
  origin:  ["http://localhost:5173", "https://vestoids-media.com"], // Frontend URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
const contactsRoute = require('./routes/Contacts');
app.use('/api/contacts', contactsRoute);

app.get('/', (req, res) => {
  res.send('Vestoids Media API');
}); 

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exits the process if unable to connect
  }
};

connectDB();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Start the server
const PORT = 5143;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
