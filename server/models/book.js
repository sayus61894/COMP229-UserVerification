let mongoose = require('mongoose');

//create model

let bookModel = mongoose.Schema({
    Title: String,
    Author: String,
    Artist: String
},
{
    collections: "books"
});

module.exports = mongoose.model('Book', bookModel);