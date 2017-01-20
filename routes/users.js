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

// Get single user
router.get('/users/:id', function(req, res, next) {
  var _id = req.params.id;
  User.findById(_id, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
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

// Update user
router.put('/users/:id', function(req, res, next) {
  var _id = req.params.id;
  User.findById(_id, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      data.device_uuid = req.body.device_uuid;
      data.level = req.body.level;
      data.strength = req.body.strength;
      data.strength_growth = req.body.strength_growth;
      data.click_count = req.body.click_count;
      data.money_spent = req.body.money_spent;
      data.time_on_gym = req.body.time_on_gym;
      data.save();
      res.status(200).json(data);
    }
  });
});
module.exports = router;
