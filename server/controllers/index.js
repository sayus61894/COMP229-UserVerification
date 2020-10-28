let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
};

module.exports.displayAboutMePage = (req, res, next) => {
    res.render('index', { title: 'About Me' });
};

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects' });
};

module.exports.dispplayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
};

module.exports.displayContactMePage = (req, res, next) => {
    res.render('index', { title: 'Contact Me' });
};

