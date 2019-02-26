import React from "react";
import Gauge from "react-svg-gauge";

import { observer, inject } from "mobx-react";

@inject("AppState")
@observer
class Gauges extends React.Component {
  render() {
    const waterData = this.props.AppState.waterData;
    return (
      <div>
        <div className="row">
          <Gauge
            value={waterData.waterLevel}
            width={200}
            height={160}
            label="Water Level (ft)"
            max={10}
            color={"#B9E4D0"}
            topLabelStyle={{
              fontSize: "25px",
              fontFamily: "Amatic SC",
              fontWeight: "700",
              color: "#055A5B"
            }}
            valueLabelStyle={{ fontFamily: "Raleway" }}
            minMaxLabelStyle={{ fontFamily: "Raleway" }}
          />
          <Gauge
            value={waterData.discharge}
            width={200}
            height={160}
            label="Water Flow (ft3/s)"
            max={45}
            color={"#F7D385"}
            topLabelStyle={{
              fontSize: "25px",
              fontFamily: "Amatic SC",
              fontWeight: "700",
              color: "#055A5B"
            }}
            valueLabelStyle={{ fontFamily: "Raleway" }}
            minMaxLabelStyle={{ fontFamily: "Raleway" }}
          />
        </div>
        <div className="row">
          <p>
            {waterData.levelCondition} {waterData.flowCondition}
          </p>
          <p>{waterData.overallCondition}</p>
        </div>
      </div>
    );
  }
}

module.exports = Gauges;
