var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
  id: String,
  title: String,
  description: String,
  type: String, // find & lost & closed
  date: String,

  coordinate_id: String, // (FK)
  user_id: String, // (FK)
  img_id: String, // (FK)
  tag_id: String, // (FK)
});

module.exports = mongoose.model('Post', Post);
