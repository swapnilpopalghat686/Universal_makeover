const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  message: { type: String }
})

module.exports = mongoose.model('appointments', userSchema, 'appointments')