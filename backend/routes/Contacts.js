const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// @route   POST /api/contacts
// @desc    Create a new contact message
// @access  Public
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