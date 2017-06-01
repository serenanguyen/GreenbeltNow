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
                 <h2>Current Weather in Austin, TX</h2>
                 <p>{weather.temperature} F</p>
                 <p>{weather.condition}
                     <span><img src={weather.image}/></span>
                 </p>
             </div>
         )
     }
};

module.exports = Weather;