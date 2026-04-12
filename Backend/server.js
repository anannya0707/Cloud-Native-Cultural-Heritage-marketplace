const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express(); // ✅ CREATE FIRST

// Routes import
const authRoutes = require("./routes/auth");

// Middleware
app.use(cors());
app.use(express.json());

// Routes use
app.use("/api/auth", authRoutes); // ✅ USE AFTER app is created

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected 🚀"))
  .catch((err) => console.error(err));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});