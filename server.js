var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var users = require('./routes/users');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', users);


var port = 3000;

app.listen(port, function(){
    console.log('Server is listening on port '+port);
});
