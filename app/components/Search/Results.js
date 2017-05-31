import React from "react";
import helpers from "../utils/helpers";
import Gauge from 'react-svg-gauge';


class Results extends React.Component {

    constructor(props){
        super(props);
    }



    render(){
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
    };
};

module.exports = Results;