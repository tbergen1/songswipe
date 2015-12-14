var util = require('./lib/utilities.js');
var handler = require('./lib/request-handler.js');
var bodyParser = require('body-parser');
var session = require('express-session');
var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(express.static(__dirname + './public'));
app.use(session({
  secret: '23gGSg5HJS4vsg8bFDsd45437VGDD6vC',
  resave: false,
  saveUninitialized: true,
}));

app.get('/', util.checkUser, handler.songViewRender);
app.get('/songs', util.checkUser, handler.savedSongList);

app.get('/login', handler.loginUserForm);
app.post('/login', handler.loginUser);

app.get('/signup', handler.signupUserForm);
app.post('/signup', handler.signupUser);