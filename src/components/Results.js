import React, { useContext } from "react";
import Gauge from "react-svg-gauge";

import { ResultsContext, LoadingContext } from "../Store";

const Results = () => {
  const results = useContext(ResultsContext).state;
  const isLoading = useContext(LoadingContext).state;

  const renderResults = () => {
    const location = results.location;
    return (
      <div className="results">
        <h2>{location.name}</h2>
        <p>{location.address}</p>
        <p>{results.gaugeReference}</p>
        <p className="info">{location.info}</p>
        <div>
          <div className="row">
            <Gauge
              value={results.waterLevel}
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
              value={results.discharge}
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
            <p className="condition">
              {results.levelCondition} {results.flowCondition}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderLoading = () => {
    return (
      <div className="loading">
        <div className="droplet" />
        <div className="droplet" />
        <div className="droplet" />
      </div>
    );
  };

  // display results
  return (
    <div className="results-container fadeInUp">
      {isLoading && renderLoading()}
      {results && !isLoading && renderResults()}
    </div>
  );
};

export default Results;
