const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// 🔐 SIGNUP
// router.post("/signup", async (req, res) => {
//   try {
//     console.log("REQ BODY:", req.body);

//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ email });
//     console.log("Checking user...");

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const user = await User.create({ name, email, password });
//     console.log("User created successfully");

//     res.status(201).json({
//       message: "User created successfully",
//       user
//     });

//   } catch (error) {
//     console.error("ERROR:", error.message);
//     res.status(500).json({ message: error.message });
//   }
// });
router.post("/signup", (req, res) => {
  return res.json({ message: "Signup route working" });
});

// 🔐 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      "secret123",
      { expiresIn: "1d" }
    );

    res.json({ message: "Login successful", token });

  } catch (error) {
    console.error("LOGIN ERROR:", error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;