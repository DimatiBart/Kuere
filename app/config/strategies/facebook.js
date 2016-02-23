var mongoose 			= require('mongoose');
var passport 			= require('passport');
var Strategy			= require('passport-facebook').Strategy;

var User 					= require('../../models/User');

passport.use(new Strategy({
		clientID: process.env.CLIENT_ID || '1661155017482341',
		clientSecret: process.env.CLIENT_SECRET || '3945831543f7778e87af8ba147293a1f',
		callbackURL: 'http://127.0.0.1:3000/login/facebook/callback'
	},
	function (accessToken, refreshToken, profile, cb) {
		User.findOrCreate({ facebookId: profile.id }, function (err, user) {
			return cb (err, user);
		})
	}
));
