const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    phone: Number,
    services: String,
    date:String,
    message:String,
    // createdAt:new Date()
    createdAt: { type: Date, default: Date.now }

})

module.exports = mongoose.model('appointments', userSchema, 'appointments')