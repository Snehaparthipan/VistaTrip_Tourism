const mongoose = require('mongoose');


const bookingSchema = new mongoose.Schema({
name: String,
email: String,
travelers: Number,
packageTitle: String,
date: String,
bookingId: String,
});


module.exports = mongoose.model('Booking', bookingSchema);