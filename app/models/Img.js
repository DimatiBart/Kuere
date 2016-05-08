var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Img = new Schema({
  id: String,
  src: String // ref link to image
});

module.exports = mongoose.model('Img', Img);
