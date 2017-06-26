// server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var connectionString = require("./connectionString");

// weather
var weather = require('weather-js');

// Location model
var Location = require("./models/location");

// Create new express app
var app = express();

// Set initial port for deployed or local
var PORT = process.env.PORT || 3000;

// Run Morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect(connectionString);
var db = mongoose.connection;
//

db.on("error", function(err){
    console.log("Mongoose Error: ", err);
});

db.once("open", function(){
    console.log("Mongoose connection successful.");
});

//Main / route to redirect use to rendered react app
app.get("/", function(req,res){
    res.sendFile(__firname = "/public/index.html");
});

// get all locations when visiting /api
app.get("/api/locations", function(req, res){
    Location.find({}).exec(function(err,doc){
        if(err){
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

// grabbing matching location id
app.get("/api/result", function(req, res){
    Location.findOne(req.query).exec(function(err,doc){
        if(err){
            console.log(err);
        } else {
            res.send(doc);
        }
    })
});
// getting current weather data
app.get("/api/weather", function(req,res){
    weather.find({search: 'Austin, TX', degreeType: 'F'},
        function(err, result) {
            if(err){
                console.log(err);
            } else {
                res.send(result[0]);
            }
        });
})

// posting new locations from admin component
// app.post("/api/locations", function(req, res){
//     let newLocation = new Location(req.body);
//     newLocation.save(function(err,doc){
//         console.log("doc: ", doc);
//         if(err){
//             console.log(err);
//         } else {
//             res.send(doc);
//         }
//     });
// });

// listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
