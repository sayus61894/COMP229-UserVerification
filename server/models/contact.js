let mongoose = require('mongoose');

//create model

let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
});


module.exports = mongoose.model('contact', contactModel, 'contact');