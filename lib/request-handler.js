var db = require('../app/config.js');
var User = require('../app/models/user.js');
var Song = require('../app/models/song.js');
var util = require('./utilities.js');

exports.loginUserForm = function(req, res) {
  res.render('login');
};

exports.signupUserForm = function(req, res) {
  res.render('signup');
};

exports.songViewRender = function(req, res) {
  // res.render('index.html');
};

exports.savedSongList = function(req, res) {
  res.render('songlist');
};

exports.loginUser = function(req, res) {
  
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username}, function(error, user) {
    if(error) {
      throw error;
    }
    if(!user) {
      res.redirect('/login');
    } else {
      user.comparePassword(password, function(match) {
        if(match) {
          util.createSession(req, res, user);
        } else {
          res.redirect('/login');
        }
      });
    }
  });
};

exports.signupUser = function(req, res) {

  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username}, function(error, user) {
    if(error) {
      throw error;
    }
    if(!user) {
      var newUser = new User({
        username: username,
        password: password
      });
      newUser.save(function(error, user) {
        if(error) {
          throw error;
        }
        util.createSession(req, res, user);
        res.redirect('/');
      });
    } else {
      console.log("Account already exists");
      res.redirect('/signup');
    }
  });

};

exports.logoutUser = function(req, res) {
  req.session.destroy(function(error) {
    if(error) {
      throw error;
    }
    res.redirect('/login');
  });
};

exports.fetchSongs = function(req, res) {
  Song.find({}, function(error, songs) {
    if(error) {
      throw error;
    }
    res.send(songs);
  });
};

exports.saveSong = function(req, res) {

  var title = req.body.title;
  var artist = req.body.artist;
  var album = req.body.album;

  Song.find({title: title}, function(error, song) {
    if(error) {
      throw error;
    }
    if(!song) {
      var newSong = new Song({
        title: title,
        artist: artist,
        album: album
      });
      newSong.save(function(error) {
        if(error) {
          throw error;
        }
      });
    } else {
      console.log(title + ' already exists in favorites');
    }
  });
};