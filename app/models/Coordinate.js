var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Coordinate = new Schema({
  id: String,
  latitude: Number,
  longtitude: Number
});

module.exports = mongoose.model('Coordinate', Coordinate);
