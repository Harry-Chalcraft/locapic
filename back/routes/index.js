var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserModel = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var passport = require('passport');

router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: 'email' })
);

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),

  function(req, res) {
    res.redirect("https://auth.expo.io/@hari-seldon182/front"
      +"?userId="+req.user.id
      +"&firstName="+req.user.first_name
      +"&lastName="+req.user.last_name
      +"&email="+req.user.email
      +"&picture="+encodeURIComponent(req.user.picture.data.url));
  }
);



module.exports = router;
