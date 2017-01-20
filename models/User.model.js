var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    device_uuid: {type: String, required: true},
    level: {type: Number, default: 1},
    strength: {type: Number, default: 0},
    strength_growth: {type: Number, default: 0},
    click_count: {type: Number, default: 0},
    money_spent: {type: Number, default: 0},
    time_on_gym: {type: Number, default: 0}
    },
    {versionKey: false}
);

module.exports = mongoose.model('Item', UserSchema);
