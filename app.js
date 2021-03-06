var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

/*
 * Routes
 */

var routes = require('./app/routes/index');
var auth = require('./app/routes/auth');
var posts = require('./app/routes/posts');

var mongoose = require('mongoose');

/*
 * Passport init
 * Strategies init
 */

var passport = require('passport');
require('./app/config/strategies/facebook.js');
require('./app/config/strategies/google.js');
require('./app/config/strategies/local.js');
require('./app/config/strategies/vk.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'supersecretninjatoken',
  resave: true,
  saveUninitialized: false
  //cookie: { secure: true, maxAge: 60000*60000 }
}));

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', routes);
app.use('/auth', auth);
app.use('/pos', posts);

mongoose.connect('mongodb://admin:admin@ds011298.mongolab.com:11298/kuere', function (err) {
  if (err) {
    console.error('Could not connect to mongodb.');
  } else {
    console.log('Connected to the DB');
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
