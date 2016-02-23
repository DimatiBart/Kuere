var mongoose 			= require('mongoose');
var passport 			= require('passport');
var Strategy			= require('passport-google-auth').Strategy;

var User 					= require('../../models/User');

passport.use(new Strategy({
		clientId: process.env.CLIENT_ID || '317648506076-cvgc8tvk8k5d0qbn4tjlnihsmo2h53ij.apps.googleusercontent.com',
		clientSecret: process.env.CLIENT_SECRET || 'a0nDuhFmqbMcu-IgHq26dlDm',
		callbackURL: 'http://127.0.0.1:3000/login/google/callback'
	},
	function (accessToken, refreshToken, profile, cb) {
		User.findOrCreate({ googleId: profile.id }, function (err, user) {
			return cb (err, user);
		})
	}
));
