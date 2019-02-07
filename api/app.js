var express = require('express');
var app = express();
var cors = require('cors');


app.use(cors());
app.options('*', cors());
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static('public'));


var customerController = require('./controllers/customerController');
app.use('/customer', customerController);

var customerController = require('./controllers/emailController');
app.use('/email', emailController);

module.exports = app;
