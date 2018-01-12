import React from "react";

import helpers from "./utils/helpers";
import { inject, observer } from 'mobx-react';

@inject('AppState')
@observer
class Weather extends React.Component {
     render(){
        helpers.getWeather().then((response) => {
             this.props.AppState.weather = response;
         });
         const weather = this.props.AppState.weather;
         return(
             <div className="fadeInDown">
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