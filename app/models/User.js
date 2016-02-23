var mongoose 							= require('mongoose');
var findOrCreate 					= require('mongoose-findorcreate');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema 								= mongoose.Schema;

var User = new Schema({
	email: String,
	username: String,
	password: String
});

User.plugin(passportLocalMongoose, { usernameField: 'email' });
User.plugin(findOrCreate);

module.exports = mongoose.model('User', User);
