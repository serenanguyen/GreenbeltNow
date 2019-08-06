import React, { useContext, useState } from "react";

import{ locations }from "../staticData";

import helpers from "../helpers";

import { ResultsContext, LoadingContext } from "../Store";

export default () => {
  const setIsLoading = useContext(LoadingContext).setState;
  const setResults = useContext(ResultsContext).setState;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setLocation] = useState("Select Location");

  const renderLocations = () => {
    const locationKeys = Object.keys(locations);

    return locationKeys
      // do not display selected location
      .filter(location => location !== selectedLocation)
      .map((location, i) => {
        return (
          <li
            key={i}
            className="item"
            data-id={location}
            onClick={handleSelect}
          >
            {locations[location].name}
          </li>
        );
      });
  };

  const handleSelect = e => {
    const locationID = e.currentTarget.dataset.id;
    // run getWaterData if new location is selected
    if (selectedLocation !== locations[locationID]) {
      setLocation(locationID);
      setIsLoading(true);
      helpers
        .getWaterData(locationID)
        .then(response => {
          setIsLoading(false);
          setResults(response);
        })
        .catch(error => {
          setIsLoading(false);
          setResults({ error });
        });
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  let dropdownClass = "dropdown";

  if (isOpen) {
    dropdownClass += " active";
  }

  const title =
    (locations[selectedLocation] && locations[selectedLocation].name) ||
    "Select Location";

  return (
    <div className={dropdownClass} onClick={toggleDropdown}>
      <div className="title">{title}</div>
      <ul className="list">{renderLocations()}</ul>
    </div>
  );
};
