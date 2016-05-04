var passport = require('passport');
var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
  id: String,
  email: String,
  username: String,
  password: String,
  phone: String,
  image_id: String, // (FK)
});

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

User.plugin(passportLocalMongoose, { usernameField: 'email' });
User.plugin(findOrCreate);

module.exports = mongoose.model('User', User);
