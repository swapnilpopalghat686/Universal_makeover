const express = require("express");
const router = express.Router();

// const admins = require("../model/adminSchema");


router.get("/all-appointments", async (req, res) => {
  const data = await Appointment.find();
  res.json({ success: true, data });
});

router.put("/approve/:id", async (req, res) => {
  await Appointment.findByIdAndUpdate(req.params.id, { status: "approved" });
  res.json({ success: true });
});



module.exports = router;