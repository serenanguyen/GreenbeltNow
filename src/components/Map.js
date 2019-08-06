import React, {useContext} from "react";

import helpers from "../helpers";

import { ResultsContext, LoadingContext } from '../Store';

const Map = () => {
  const setIsLoading = useContext(LoadingContext).setState;
  const setResults= useContext(ResultsContext).setState;

  const onClick = eventKey => {
      setIsLoading(true);
      helpers.getWaterData(eventKey.target.id)
      .then(response => {
        setIsLoading(false);
        setResults(response);
      })
      .catch(error => {
        setIsLoading(false);
        setResults(error);
    })
  };
  return (
    <div className="fadeInDown">
      <h1>GREENBELT NOW</h1>
      <img src="https://i.imgur.com/5xW6mRh.png" className="map" alt="greenbelt-map" useMap="#Map" />
      <map name="Map" id="Map">
        <area
          alt="Lost Creek"
          id="lostCreek"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="80,84,93,103"
        />
        <area
          alt="Sculpture Falls"
          id="sculptureFalls"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="149,153,164,173"
        />
        <area
          alt="Twin Falls"
          id="twinFalls"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="215,269,231,288"
        />
        <area
          alt="360 Loop"
          id="loop360"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="302,313,323,331"
        />
        <area
          alt="Gus Fruh"
          id="gusFruh"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="327,271,345,293"
        />
        <area
          alt="Spyglass"
          id="spyglass"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="400,203,414,223"
        />
        <area
          alt="Campbell's Hole"
          id="campbellsHole"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="413,171,431,191"
        />
        <area
          alt="Above Barton Springs"
          id="aboveBarton"
          onClick={eventKey => {
            onClick(eventKey);
          }}
          href="#"
          shape="rect"
          coords="512,155,525,173"
        />
      </map>
      <h2>Can I swim at the Greenbelt today</h2>
      <p>
        Select a Greenbelt access point on the map or dropdown menu to display
        the latest water data from the closest gauge.
      </p>
    </div>
  );
}

export default Map;
