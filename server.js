// server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

// weather
var weather = require('weather-js');

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

// listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
