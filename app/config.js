var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/swipeify');

var db = mongoose.connection;

db.on('error', console.error);

module.exports = db;