const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 🔐 SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check missing fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create user
    const user = await User.create({ name, email, password });

    // 🔥 CREATE TOKEN
    const token = jwt.sign(
      { id: user._id },
      "secret123", // ⚠️ later move to .env
      { expiresIn: "1d" }
    );

    // response
    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("SIGNUP ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
});


// 🔐 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check fields
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 🔥 CREATE TOKEN
    const token = jwt.sign(
      { id: user._id },
      "secret123",
      { expiresIn: "1d" }
    );

    // response
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;