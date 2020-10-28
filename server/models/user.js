let mongoose = require ('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// create userModel
let userModel = mongoose.Schema({
    username: String,
    //password: String,
    email: String
});


module.exports = mongoose.model('user', userModel, 'users');