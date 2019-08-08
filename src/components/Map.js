import React, { useContext } from "react";

import helpers from "../helpers";

import { ResultsContext, LocationContext, LoadingContext } from "../Store";

const Map = () => {
  const setIsLoading = useContext(LoadingContext).setState;
  const setLocation = useContext(LocationContext).setState;
  const setResults = useContext(ResultsContext).setState;

  const onClick = e => {
    setIsLoading(true);
    setLocation(e.target.id);
    helpers
      .getWaterData(e.target.id)
      .then(response => {
        setIsLoading(false);
        setResults(response);
      })
      .catch(error => {
        setIsLoading(false);
        setResults(error);
      });
  };

  return (
    <div className="map-container fadeInDown">
      <h1>GREENBELT NOW</h1>
      <div
        className="image-map-container"
      >
        <img
          src="https://i.imgur.com/5xW6mRh.png"
          className="map"
          alt="greenbelt-map"
          useMap="#Map"
        />
        <div className="anchors">
          <button
            id="lostCreek"
            className="anchor"
            style={{
              left: "11.41%",
              top: " 18.63%",
              width: "5.94%",
              height: "8.82%"
            }}
            onClick={onClick}
          />
          <button
            id="sculptureFalls"
            className="anchor"
            onClick={onClick}
            style={{
              left: "21.88%",
              top: "35.54%",
              width: "5.47%",
              height: "9.56%"
            }}
          />
          <button
            id="twinFalls"
            className="anchor"
            onClick={onClick}
            style={{
              left: "32.19%",
              top: "63.48%",
              width: "5.63%",
              height: "8.82%"
            }}
          />
          <button
            id="loop360"
            className="anchor"
            onClick={onClick}
            style={{
              left: "46.41%",
              top: "75.49%",
              width: "5.31%",
              height: "8.33%"
            }}
          />
          <button
            id="gusFruh"
            className="anchor"
            onClick={onClick}
            style={{
              left: "50%",
              top: "63.97%",
              width: "5.16%",
              height: "9.07%"
            }}
          />
          <button
            id="spyglass"
            className="anchor"
            onClick={onClick}
            style={{
              left: "61.56%",
              top: "50%",
              width: "4.69%",
              height: "7.11%"
            }}
          />
          <button
            id="campbellsHole"
            className="anchor"
            onClick={onClick}
            style={{
              left: "63.44%",
              top: "39.95%",
              width: "5.47%",
              height: "7.84%"
            }}
          />
          <button
            id="aboveBarton"
            className="anchor"
            onClick={onClick}
            style={{
              left: "77.97%",
              top: "35.78%",
              width: "5.31%",
              height: "7.6%"
            }}
          />
        </div>
      </div>
      <h2>Can I swim at the Greenbelt today</h2>
      <p className="full-view">
        Select a Greenbelt access point on the map or dropdown menu to display
        the latest water data from the closest gauge.
      </p>
      <p className="responsive-view">
        Select a Greenbelt access point from the dropdown menu to display the
        latest water data from the closest gauge.
      </p>
    </div>
  );
};

export default Map;
