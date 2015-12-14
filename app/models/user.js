var mongoose = require('mongoose');
var promise = require('bluebird');
var bcrypt = require('bcrypt-nodejs');

var user = mongoose.Schema({
  username: {type: String, unqiue: true},
  password: String
});

user.methods.comparePassword = function(attemptedPassword, callback) {
  bcrypt.compare(attemptedPassword, this.password, function(error, isMatch) {
    if(error) {
      throw error;
    }
    callback(isMatch);
  });
}

user.methods.hashPassword = function() {
  var cipher = promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null, ).bind(this)
  .then(function(hash) {
    this.password = hash;
  });
}

user.pre('save', function(next) {
  this.hashPassword.then(function(hash) {
    next();
  });
});

var User = mongoose.model('User', user);

module.exports = User; 