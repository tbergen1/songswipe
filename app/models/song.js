var mongoose = require('mongoose');
var promise = require('bluebird');

var song = mongoose.Schema({
  title: String,
  artist: String,
  album: String
});

var Song = mongoose.model('Song', song);

module.exports = Song; 