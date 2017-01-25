var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    device_uuid: {type: String, required: true},
    level: {type: Number, default: 1},
    strength: {type: Number, default: 0},
    nickname: {type: String, default: 'noname'}
    },
    {versionKey: false}
);

module.exports = mongoose.model('User', UserSchema);
