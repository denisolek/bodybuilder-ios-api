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
        .sort({strength: 'desc'})
        .then(function(data){
            res.json(data);
        });
});

// Get single user
router.get('/users/:uuid', function(req, res, next) {
  var device_uuid = req.params.uuid;
  User.findOne({ 'device_uuid': device_uuid }, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      if (data == null) {
        return res.sendStatus(404);
      }
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
      nickname: req.body.nickname
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
router.put('/users/:uuid', function(req, res, next) {
  var device_uuid = req.params.uuid;
  User.findOne({ 'device_uuid': device_uuid }, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      data.device_uuid = req.body.device_uuid;
      data.level = req.body.level;
      data.strength = req.body.strength;
      data.nickname = req.body.nickname
      data.save();
      res.status(200).json(data);
    }
  });
});
module.exports = router;
