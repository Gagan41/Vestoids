const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// @route   POST /api/contacts
// @desc    Create a new contact message
// @access  Public

// Handle preflight (OPTIONS) request for CORS
router.options("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://vestoids-media.com"); // Ensure it matches your frontend domain
  res.header("Access-Control-Allow-Methods", "POST, OPTIONS"); // Allow POST and OPTIONS methods
  res.header("Access-Control-Allow-Headers", "Content-Type"); // Allow Content-Type header
  res.status(200).end();
});

// Handle POST request to create a new contact
router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      phone, // Include phone in the contact
      subject,
      message,
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
