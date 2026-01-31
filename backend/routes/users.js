import express from "express";
import User from "../models/User.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const role = email.endsWith("@StandSpeakAct.org") ? "admin" : "reader";

    const newUser = new User({ username, email, password, role });
    await newUser.save();

    const { _id, role: userRole } = newUser;
    res.status(201).json({
      message: "User created",
      user: { _id, username, email, role: userRole },
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Email already exists" });
    }
    console.error("Signup error:", err);
    res.status(500).json({ message: "Signup failed", error: err });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const { _id, username, role } = user;
    res.json({
      message: "Login successful",
      user: { _id, username, email, role },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed", error: err });
  }
});

export default router;
