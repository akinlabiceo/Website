/*
  We create ORM like functions that Creates Reads Update and Delete
  Notification data from the NoSQL Cloudant Database
*/

'use strict';

require('dotenv').config({
  silent: true
});

//setup email thrid-party api
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport('smtps://'+process.env.GMAIL_USERNAME.replace(/@/g, '%40')+':'+process.env.GMAIL_PASSWORD+'@smtp.gmail.com');
const josla = "http://josla.com.ng"

//setup utilities
const util = require('../util');
var request = require('request');
var querystring = require('querystring');
var api = process.env.API

const Email = {

send: function(data, callback){

  let response = {}

  const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


}



}
