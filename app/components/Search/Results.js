import React from "react";
import helpers from "../utils/helpers";
import Gauge from 'react-svg-gauge';



class Results extends React.Component {

    constructor(props){
        super(props);
        this.state={
            weather: ""
        }
        this.renderContainer = this.renderContainer.bind(this);
        // helpers.getWeather().then((response) => {
        //     // this.setState({weather: response})
        //     console.log(response);
        // })

    }

    // container for when water data is sent down as props
    renderContainer(){
        const location = this.props.locationData;
        const waterData = this.props.waterData;
        return(
            <div>
                <u>Results</u>
                <p>{location.name}</p>
                <p>{location.address}</p>
                <p>{location.info}</p>
                <p>{waterData.waterLevel} ft</p>
                <p>{waterData.discharge} ft3/s</p>
                <div className="row">
                    <Gauge value={waterData.waterLevel}
                           width={200} height={160}
                           label="Water Level (ft)"
                           max={10}
                    />
                    <Gauge value={waterData.discharge}
                           width={200} height={160}
                           label="Water Flow (ft3/s)"
                           max={15}
                    />
                </div>
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