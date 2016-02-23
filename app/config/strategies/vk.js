var mongoose 			= require('mongoose');
var passport 			= require('passport');
var Strategy			= require('passport-vkontakte').Strategy;

var User 					= require('../../models/User');

passport.use(new Strategy({
		clientID: process.env.CLIENT_ID || '5313352',
		clientSecret: process.env.CLIENT_SECRET || 'yYWRYWlxrrkxBpxR0KkW',
		callbackURL: 'http://127.0.0.1:3000/login/vk/callback'
	},
	function (accessToken, refreshToken, profile, cb) {
		User.findOrCreate({ vkId: profile.id }, function (err, user) {
			return cb (err, user);
		})
	}
));
