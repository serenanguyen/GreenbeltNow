import React from "react";
import helpers from "../utils/helpers";

import Gauges from "./Gauge";

class Results extends React.Component {

    constructor(props){
        super(props);
        // state for weather data
        this.state = {
            weather: {}
        }
        this.renderContainer = this.renderContainer.bind(this);
        // get weather data and set it to weather state
        helpers.getWeather().then((response) => {
            this.setState({ weather: response})
        })
    }

    // container for when water data is sent down as props
    renderContainer(){
        const location = this.props.locationData;


        return(
            <div className="results fadeInUp">
                <h2>{location.name}</h2>
                <p>{location.address}</p>
                <p className="info">{location.info}</p>
                <Gauges waterData={this.props.waterData} />
            </div>
        )
    }

    render(){
        // if there is no water data render an empty component
        if(!this.props.waterData.waterLevel){
            return(
                    <p></p>
            );
            // if there is water data render the container created by renderContainer
        } else {
            return this.renderContainer();
        }

    };
};

module.exports = Results;