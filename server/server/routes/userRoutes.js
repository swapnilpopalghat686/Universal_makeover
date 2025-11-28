const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const users = require("../model/userSchema");

// Temporary OTP storage
let otpStore = {};

// ------------------ TEST ROUTES ------------------
router.get("/appointments", (req, res) => {
  res.send("✅ Appointment API is working...");
});

router.get("/send-otp", (req, res) => {
  res.send("✅ send otp API is working...");
});

router.get("/verify-otp", (req, res) => {
  res.send("✅ verify otp API is working...");
});

// ------------------ SEND OTP ------------------
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required to send OTP",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

 router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required to send OTP",
    });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "OTP Verification",
    html: `<h1>${otp}</h1>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "OTP sent successfully!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send OTP",
      error: error.message,
    });
  }
});

// ------------------ VERIFY OTP ------------------
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      success: false,
      message: "Email and OTP are required",
    });
  }

  if (parseInt(otp) === otpStore[email]) {
    delete otpStore[email];
    return res.json({ success: true, message: "OTP verified successfully!" });
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid OTP. Please try again.",
    });
  }
});

// ------------------ CREATE APPOINTMENT ------------------
router.post("/appointments", async (req, res) => {
  try {
    const { name, email, phone, service, date, message } = req.body;

    if (!name || !email || !phone || !service || !date) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const result = new users(req.body);
    const data = await result.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
      },
    });

    // User mail
    const userMail = {
      from: '"Nandini’s Make-Over 💅" <nandinikadam631@gmail.com>',
      to: email,
      subject: "🎉 Appointment Confirmed!",
      html: `
        <h2>Appointment Confirmed!</h2>
        <p>Dear <b>${name}</b>,</p>
        <p>Your appointment has been confirmed.</p>
      `,
    };

    // Admin mail
    const adminMail = {
      from: '"Nandini’s Make-Over 💅" <nandinikadam631@gmail.com>',
      to: "nandinikadam631@gmail.com",
      subject: "🆕 New Appointment Booked!",
      html: `
        <h2>New Appointment</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Service: ${service}</p>
      `,
    };

    await transporter.sendMail(userMail);
    await transporter.sendMail(adminMail);

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully!",
      data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating appointment",
      error: err.message,
    });
  }
});

module.exports = router;
