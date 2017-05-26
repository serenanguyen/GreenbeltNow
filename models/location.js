var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    name: {type: String},
    address: {type: String},
    info: {type: String},
    locationid: {type: String}
});

var Location = mongoose.model("Location", LocationSchema);

module.exports = Location;