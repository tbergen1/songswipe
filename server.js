var app = require('./server-config.js');

var port = process.env.PORT || 3000;

app.listen(port);
console.log(__dirname);
console.log('Server is now listening on port ' + port);