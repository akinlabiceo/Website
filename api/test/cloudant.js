'use strict';

require('dotenv').config({
  silent: true,
  path: __dirname + '..\.env'
});

//setup database connection
var Cloudant = require('@cloudant/cloudant');
var username = process.env.CLOUDANT_USERNAME;
var password = process.env.CLOUDANT_PASSWORD;

console.log(username)
console.log(__dirname + '..\.env')
var cloudant = Cloudant({account:username, password:password});



cloudant.db.list(function(err, allDbs) {
  console.log('All my databases: %s', allDbs.join(', '))
});
