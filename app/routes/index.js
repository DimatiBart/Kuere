var express = require('express');
var router  = express.Router();
var passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});


router.get('/auth/facebook', passport.authenticate('facebook'));

router.get(
	'/auth/facebook/callback',
	passport.authenticate (
		'facebook',
		{ failureRedirect: '/login' }
	),
	function (req, res) {
		console.log('successfully authorized with facebook');

		// FIXME
		res.status(200).json({ id: req.user._id });
	}
);

router.get('/auth/google', passport.authenticate('google'));

router.get(
	'auth/google/callback',
	passport.authenticate (
		'google',
		{ failureRedirect: '/login' }
	),
	function (req, res) {
		console.log('successfully authorized with google');

		// FIXME
		res.status(200).json({ id: req.user._id });
	}
);


router.get('/auth/vk', passport.authenticate('vkontakte'));

router.get(
	'/auth/vk/callback',
	passport.authenticate (
		'vkontakte',
		{ failureRedirect: '/login' }
	),
	function (req, res) {
		console.log('successfully authorized with vk');

		// FIXME
		res.status(200).json({ id: req.user._id });
	}
);

module.exports = router;
