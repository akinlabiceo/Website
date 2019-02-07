
'use strict';

require('dotenv').config({
  silent: true
});

//setup database connection
var Cloudant = require('@cloudant/cloudant');
var username = process.env.CLOUDANT_USERNAME;
var password = process.env.CLOUDANT_PASSWORD;
var cloudant = Cloudant({account:username, password:password});
var customers = cloudant.db.use('customer');


const Email = {
  add: function (data, callback){

    let response = {}

    cloudant.db.get('customer', function(err, result) {
      if (!err) {
        var no_of_customers= Number(result.doc_count);


        customers.find({
          "selector": {
            "$and": [
              {
                "customer_id": {
                  "$eq": Number(data.customer_id)
                }
              }
            ]
          },
          "fields": [
            "customer_id",
            "name",
            "email",
            "subject",
            "message"
          ],
          "sort": [
            {
              "customer_id": "asc"
            }
          ]
        }, function(err, result) {
          if (!err) {
            if (result.docs.length > 0) {
              response['status'] = 'existingCustomer';
              response['data'] = result.docs;
              callback(null, response);
            }
            else {
              var newCustomer = {
                "customer_id": no_of_customers + 1,
                "name": data.name,
                "email": data.email,
                "subject": data.subject,
                "message": data.message
              }
              customers.insert(newCustomer, function(err, result) {
                if (!err) {
                  response['status'] = 'success';
                  response['data'] = newCustomer;
                  callback(null, response);
                }
                else {
                  response['status'] = 'errorDB';
                  response['data'] =newCustomer;
                  callback(null, response);
                }
              });
            }
          }
          else {
            response['status'] = 'errorDB';
            response['data'] = data;
            callback(null, response);
          }
        });

      }

    });

  },

  

}

module.exports = Email;
