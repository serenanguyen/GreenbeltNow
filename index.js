const express = require("express");
const weather = require("openweather-apis");
const path = require('path');

const dotenv = require("dotenv");
// dotenv.config();

const app = express();

const WEATHER_KEY = process.env.WEATHER_KEY;
console.log('vars', process.env);

app.use(express.static(path.join(__dirname, 'client/build')));

// create a GET route
app.get("/api/weather", (req, res) => {
  weather.setLang("en");
  weather.setCity("Austin");
  weather.setUnits("imperial");
  weather.setAPPID(WEATHER_KEY);

  return weather.getAllWeather((err, response) => {
    if (err) {
      throw Error(err);
    }
    
    res.send({ response });
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));