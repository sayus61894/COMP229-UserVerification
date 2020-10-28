let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let contact = require('../models/contact');

/* GET route for the Contact list page */
router.get('/', (req, res, next) => {
    contact.find().sort({name:1}).exec((err, contactList) => {
        if(err){
            return console.error(err);
        }else{
            console.log(contactList);
            res.render('contact/list', {title: 'Contact List', ContactList: contactList});
        };
    });
})

/* GET route for Add page */
router.get('/add', (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'});
})

/* POST route for Add page */
router.post('/add', (req, res, next) => {
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
})

/* GET route for Edit page */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    contact.findById(id, (err, editableContact) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.render('contact/edit', {title: 'Edit Contact', editableContact});
        }
    });
})

/* POST route for Edit page */
router.post('/edit/:id', (req, res, next) => {
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
})

/* GET to perform deletion */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    contact.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contact-list');
        }
    })
    
})

module.exports = router;