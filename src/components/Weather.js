import React, { useEffect, useState } from "react";
import weather from "openweather-apis";

export default () => {
  const [data, setData] = useState();
  // passing empty array as second arg treats this similarly to componentDidMount
  useEffect(() => {
    weather.setLang('en'); 
    weather.setCity('Austin');
 	  weather.setUnits('imperial');
 
    // check http://openweathermap.org/appid#get for get the APPID
 	  weather.setAPPID('42ebbe7c726c3fc801edf7558521481b');

    weather.getAllWeather(function(err, res){
      setData({
        temp: res.main.temp,
        condition: res.weather[0].description,
        img: res.weather[0].icon
      })
    });
  }, []);

  const imgUrl = data && `http://openweathermap.org/img/wn/${data.img}@2x.png`

  return (
    <div className="weather fadeInDown">
      <h2>Current Weather in Austin, TX</h2>
      <div className="weather-info">
        <img src={imgUrl} className="weather-icon" alt="weather-icon" />
        <p>{data && data.temp} F</p>
      </div>
    </div>
  );
};
