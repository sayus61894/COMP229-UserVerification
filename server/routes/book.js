let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let book = require('../models/book');

/* GET route for the book list page */
router.get('/', (req, res, next) => {
    book.find((err, booklist) => {
        if(err){
            return console.error(err);
        }else{
            console.log(booklist);
            res.render('book/list', {title: 'Book List', Booklist: booklist});
        }
    })
})

/* GET route for Add page */
router.get('/add', (req, res, next) => {
    res.render('book/add', {title: 'Add Book'});
})

/* POST route for Add page */
router.post('/add', (req, res, next) => {
    let newBook = book({
        "Title": req.body.Title,
        "Author": req.body.Author,
        "Artist": req.body.Artist
    });

    book.create(newBook,(err, book) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/book-list');
        }
    });
})

/* GET route for Edit page */
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    book.findById(id, (err, editableBook) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.render('book/edit', {title: 'Edit Book', editableBook});
        }
    });
})

/* POST route for Edit page */
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedBook = book({
        "_id": id,
        "Title": req.body.Title,
        "Author": req.body.Author,
        "Artist": req.body.Artist
    });

    book.updateOne({_id: id}, updatedBook, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/book-list');
        }
    });
})

/* GET to perform deletion */
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    book.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/book-list');
        }
    })
    
})

module.exports = router;