require('./models/bddconnect');
var passport         = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
passport.use(new FacebookStrategy({
    clientID: "610819396085557",
    clientSecret: "74103bc7384f5f4223a2c360c1058624",
    callbackURL: 'https://fast-shore-29443.herokuapp.com/auth/facebook/callback',
    profileFields: ['id', 'first_name', 'last_name', 'email, picture']

  },
  function(accessToken, refreshToken, profile, done) {

    return done(null, profile._json);

  }));

app.use(passport.initialize());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
