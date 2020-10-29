let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// user model creation
let userModel = require('../models/user');
let User = userModel.user;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home', displayName: req.user ? req.user.displayName : ''});
};

module.exports.displayAboutMePage = (req, res, next) => {
    res.render('index', { title: 'About Me', displayName: req.user ? req.user.displayName : '' });
};

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects', displayName: req.user ? req.user.displayName : ''});
};

module.exports.dispplayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', displayName: req.user ? req.user.displayName : '' });
};

module.exports.displayContactMePage = (req, res, next) => {
    res.render('index', { title: 'Contact Me', displayName: req.user ? req.user.displayName : '' });
};

module.exports.displayLoginPage = (req, res, next) => {
    if (!req.user) {
        res.render('auth/login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            res.redirect('/login');
        }
        req.login(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.redirect('/contact-list');
        })
    })(req, res, next);
}

module.exports.displayRegisterPage = (req, res, next) => {
    if (!req.User) {
        res.render('auth/register', {
            title: 'Register',
            messages: req.flash('RegisterMessage'),
            displayName: req.User ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log('Error: Inserting New User');
            if (err.name == "UserExistsError") {
                req.flash('registerMessage', 'Registration Error: User Already Exists');
                console.log('Error: User Already Exists');
            }
            return res.render('auth/register', {
                title: 'Register',
                messages: req.flash('registrationMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        } else {
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list');
            })
        }
    })
};

module.exports.logOutUser = (req, res, next) => {
    req.logout();
    res.redirect('/');
}