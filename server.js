const express = require("express");
const weather = require("openweather-apis");
const app = express();
const port = process.env.PORT || 5000;

const WEATHER_KEY = process.env.WEATHER_KEY || require("./weatherKey.js");

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/weather", (req, res) => {
  weather.setLang("en");
  weather.setCity("Austin");
  weather.setUnits("imperial");
  weather.setAPPID(WEATHER_KEY);

  return weather.getAllWeather((err, response) => {
    if (err) {
      throw Error(err);
    }
    res.send({response});
  });
});
