import React from "react";

import helpers from "./utils/helpers";

class Weather extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             weather: {}
         }
         helpers.getWeather().then((response) => {
             this.setState({ weather: response })
         });
     }

     render(){
         const weather = this.state.weather;
         return(
             <div>
                 <b>Current Weather in Austin, TX</b>
                 <p>{weather.temperature} F</p>
                 <p>{weather.condition}
                     <span><img src={weather.image}/></span>
                 </p>
             </div>
         )
     }
};

module.exports = Weather;