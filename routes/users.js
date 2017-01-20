var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.model');

var db = 'mongodb://user:user@ds117189.mlab.com:17189/ios_bodybuilder';
mongoose.Promise = global.Promise;
mongoose.connect(db);

// Get all users
router.get('/users', function(req, res, next){
    User.find()
        .then(function(data){
            res.json(data);
        });
});

// Add new user
router.post('/users', function(req, res, next){
    var user = {
      device_uuid: req.body.device_uuid,
      level: req.body.level,
      strength: req.body.strength,
      strength_growth: req.body.strength_growth,
      click_count: req.body.click_count,
      money_spent: req.body.money_spent,
      time_on_gym: req.body.time_on_gym
    };

    var data = new User(user);
    data.save(function(err){
        if(err){
            res.send(err);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;
