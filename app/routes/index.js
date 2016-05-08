var express = require('express');
var router  = express.Router();
var passport = require('passport');

var Post = require('../models/Post');
var Coordinate = require('../models/Coordinate');
var User = require('../models/User');
var Img = require('../models/Img');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});


module.exports = router;
