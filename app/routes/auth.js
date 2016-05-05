var express  = require('express');
var User 		 = require('../models/User');
var passport = require('passport');
var router 	 = express.Router();

router.get('/', function (req, res, next) {
  res.redirect('/');
});

router.get('/facebook', passport.authenticate('facebook'));

router.get(
	'/facebook/callback',
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

router.get('/google', passport.authenticate('google'));

router.get(
	'/google/callback',
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


router.get('/vk', passport.authenticate('vkontakte'));

router.get(
	'/vk/callback',
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

router.post('/register', function (req, res) {
	if (!req.body.email || !req.body.password || !req.body.username) {
		return res.status(400).json({ message: 'Please fill out all fields' });
	}
	User.register(new User({ email : req.body.email, username: req.body.username }), req.body.password, function (err, account) {
		if (err) {
			return res.status(500).json({ err: err });
		}
		passport.authenticate('local')(req, res, function () {
			return res.status(200).json({status: 'Registration successful!'});
		});
	});
});

router.post('/login', function (req, res, next) {
	if (!req.body.email || !req.body.password) {
		return res.status(400).json({ message: 'Please fill out all fields' });
	}
	passport.authenticate('local', function (err, user, info) {
		if (err) {
			return res.status(500).json({ err: err });
		}
		if (!user) {
			return res.status(401).json({ err: info });
		}
		req.logIn(user, function (err) {
			if (err) {
				return res.status(500).json({ err: 'Could not log in user' });
			}
			res.status(200).json({ id:req.user._id });
		});
	})(req, res, next);
});


router.get('/logout', function (req, res) {
	req.logOut();
	req.session.destroy(function (err) {
		res.redirect('/');
	});
});

module.exports = router;
