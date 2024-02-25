// userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    // User registration logic
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    // User login logic
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
