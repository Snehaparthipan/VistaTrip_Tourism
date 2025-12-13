const mongoose = require('mongoose');


const packageSchema = new mongoose.Schema({
title: String,
location: String,
price: Number,
duration: String,
});


module.exports = mongoose.model('Package', packageSchema);