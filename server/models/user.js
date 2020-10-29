let mongoose = require ('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// create userModel
let userModel = mongoose.Schema({
    username: {
        type: String,
        default: '',
        trim: true,
        required: "username is required"
    },
    /* NOT NEEDED, PASSPORT HANDLES IT.
    password:  {
        type: String,
        default:'',
        trim: true,
        required: "password is required"
    },
    */
    email:  {
        type: String,
        default: '',
        trim: true,
        required: "email address is required"
    },
    displayName:  {
        type: String,
        default: '',
        trim: true,
        required: "display name is required"
    },
    created: {
        type: Date,
        default: Date.now
    },
    update: {
        type: Date,
        default: Date.now
    }
},
{
    collection: "users"
});

let options = ({missingPasswordError: "Password is missing."});

userModel.plugin(passportLocalMongoose, options);

module.exports.user = mongoose.model('user', userModel);