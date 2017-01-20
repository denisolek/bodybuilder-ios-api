var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
// var User = require('../models/User.model');

// var db = 'mongodb://test:test@ds117189.mlab.com:17189/ios_bodybuilder';
// mongoose.Promise = global.Promise;
// mongoose.connect(db);

// Get all users
router.get('/users', function(req, res, next){
  console.log('works');
    // User.find()
    //     .then(function(data){
    //         res.json(data);
    //     });
});

module.exports = router;
