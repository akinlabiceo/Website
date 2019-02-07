var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var email = require('../services/notification/customer');


router.post('/', function (req, res) {
  email.add({customer_id:req.body.customer_id, name:req.body.name, email:req.body.email, subject:req.body.subject, message:req.body.message}, function (err, Response) {
    if (err) return res.status(500).send("There was a problem adding to the database .");
    res.status(200).send(Response);
  });
});

module.exports = router;
