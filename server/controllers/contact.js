let express = require('express');
let router = express.Router();

let contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    contact.find().sort({name:1}).exec((err, contactList) => {
        if(err){
            return console.error(err);
        }else{
            console.log(contactList);
            res.render('contact/list', {title: 'Contact List', ContactList: contactList,  displayName: req.user ? req.user.displayName : ''});
        };
    });
};

module.exports.displayAddContactPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact',  displayName: req.user ? req.user.displayName : ''});
};

module.exports.processAddContactPage = (req, res, next) => {
    let newContact = contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    contact.create(newContact,(err, contact) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contact-list');
        }
    });
};

module.exports.displayEditContactPage = (req, res, next) => {
    let id = req.params.id;

    contact.findById(id, (err, editableContact) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.render('contact/edit', {title: 'Edit Contact', editableContact,  displayName: req.user ? req.user.displayName : ''});
        }
    });
};

module.exports.processEditContactPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    contact.updateOne({_id: id}, updatedContact, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contact-list');
        }
    });
};

module.exports.deleteContact = (req, res, next) => {
    let id = req.params.id;

    contact.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contact-list');
        }
    })
    
};