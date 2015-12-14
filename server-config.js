var util = require('./lib/utilities.js');
var handler = require('./lib/request-handler.js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var express = require('express');
var app = express();


var sessionCheck = function(req, res, next) {
  if(req.session && req.session.user) {
    next();
  }
  else {
    res.redirect('/');
  }
}

app.use(bodyParser());
app.use(express.static(__dirname + './public'));
app.use(cookieParser('23gGSg5HJS4vsg8bFDsd45437VGDD6vC'));
app.use(session());

app.get('/', sessionCheck, );

app.get('/login');
app.post('/login');

app.get('/signup');
app.post('/signup');

app.get('/songs');