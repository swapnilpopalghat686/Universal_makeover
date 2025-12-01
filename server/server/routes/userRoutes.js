const express = require("express");
const router = express.Router();
const users = require("../model/userSchema");
const sendMail = require("./utils/sendMail");

// ------------------ CREATE APPOINTMENT ------------------
router.post("/appointments", async (req, res) => {
  try {
    const { name, email, phone, service, date, message } = req.body;

    if (!name || !email || !phone || !service || !date) {
      return res
        .status(400)
        .json({ success: false, message: "All required fields must be provided" });
    }

    const newAppt = new users(req.body);
    const savedAppt = await newAppt.save();

    // USER MAIL
    await sendMail({
      to: email,
      subject: "🎉 Appointment Confirmed!",
      html: `
        <h2>Your Appointment is Confirmed</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Date:</b> ${date}</p>
      `,
    });

    // ADMIN MAIL
    await sendMail({
      to: "nandinikadam631@gmail.com",
      subject: "📩 New Appointment Booked",
      html: `
        <h3>New Appointment</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Date:</b> ${date}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Appointment saved & emails sent successfully",
      data: savedAppt,
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
