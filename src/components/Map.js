import React, { useContext } from "react";

import helpers from "../helpers";

import { ResultsContext, LocationContext, LoadingContext } from "../Store";

const Map = () => {
  const setIsLoading = useContext(LoadingContext).setState;
  const setLocation = useContext(LocationContext).setState;
  const setResults = useContext(ResultsContext).setState;

  const onClick = eventKey => {
    setIsLoading(true);
    setLocation(eventKey.target.id);
    helpers
      .getWaterData(eventKey.target.id)
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
      <img
        src="https://i.imgur.com/5xW6mRh.png"
        className="map"
        alt="greenbelt-map"
        useMap="#Map"
      />
      <map name="Map" id="Map">
        <area
          alt="Lost Creek"
          id="lostCreek"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="14,82,102,107"
        />
        <area
          alt="Sculpture Falls"
          id="sculptureFalls"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="59,177,168,151"
        />
        <area
          alt="Twin Falls"
          id="twinFalls"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="233,266,147,291"
        />
        <area
          alt="360 Loop"
          id="loop360"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="318,303,287,339"
        />
        <area
          alt="Gus Fruh"
          id="gusFruh"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="394,271,330,296"
        />
        <area
          alt="Spyglass"
          id="spyglass"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="391,210,465,234" 
        />
        <area
          alt="Campbell's Hole"
          id="campbellsHole"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="413,173,494,199"
        />
        <area
          alt="Above Barton Springs"
          id="aboveBarton"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="513,156,631,195"
        />
      </map>
      <h2>Can I swim at the Greenbelt today</h2>
      <p className="full-view">
        Select a Greenbelt access point on the map or dropdown menu to display
        the latest water data from the closest gauge.
      </p>
      <p className="responsive-view">
        Select a Greenbelt access point from the dropdown menu to display
        the latest water data from the closest gauge.
      </p>
    </div>
  );
};

export default Map;