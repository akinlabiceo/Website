var app = require('./app');

// Environment variables
require('dotenv').config({
  silent: true
});


var port = process.env.PORT || 5500;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
