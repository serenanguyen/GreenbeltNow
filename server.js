const express = require("express");
const weather = require("openweather-apis");
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config();

const WEATHER_KEY = process.env.WEATHER_KEY;

app.use(express.static("./public"));

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
    res.send({ response });
  });
});


//production modeif(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  //  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}
//build modeapp.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})
//start serverapp.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);})
