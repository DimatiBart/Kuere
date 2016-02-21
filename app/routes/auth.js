var express  = require('express');
var User 		 = require('../models/User');
var passport = require('passport');
var router 	 = express.Router();

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
