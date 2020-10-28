// Third Party Packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Database Setup
let mongoose = require('mongoose');
let dbConnection = require('./db');

//Connecting Mongoose to DB
mongoose.connect(dbConnection.URI, { useNewUrlParser: true, useUnifiedTopology: true});

let mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'Connection Error:'));
mongodb.once('open', ()=>{
  console.log("Connected to MongoDB...");
})

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let bookRouter = require('../routes/book');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book-list', bookRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'Error'});
});

module.exports = app;