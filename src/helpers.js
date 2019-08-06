import axios from "axios";

import { locations, gaugeLocations } from "./staticData";

const helpers = {
  runQuery(locationID) {
    return axios.get("https://waterservices.usgs.gov/nwis/iv/", {
      params: {
        site: locationID,
        format: "json",
        parameterCd: "00065,00060",
        siteStatus: "active"
      }
    });
  },
  getWaterData(locationName) {
    const locationID = locations[locationName].locationID;
    const waterData = {};
    return this.runQuery(locationID)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("request failed");
        }
        waterData.location = locations[locationName];

        // gauge reference
        const gaugeID = gaugeLocations[locationID];
        waterData.gaugeReference = `Water data is being pulled from the gauge locatated at ${locations[gaugeID].name}.`
         
        const dataPoints = response.data.value.timeSeries;

        dataPoints.forEach(data => {
          const dataType = data.variable.variableDescription;
          const value = data.values[0].value[0].value;

          if (dataType.includes("Discharge")) {
            waterData.discharge = value;
            if (value < 100) {
              waterData.flowCondition = "Water flow might be too slow.";
            } else if (value > 550) {
              waterData.flowCondition =
                "The water is moving a lil too fast, maybe take a nap instead";
            } else {
              waterData.flowCondition = "Water flow is pretty good!";
            }
          } else {
            // we can assume dataType = Gage height, ft
            waterData.waterLevel = value;
            if (value < 2) {
              waterData.levelCondition = "Water level might be too low.";
            } else if (value > 7) {
              waterData.levelCondition = "Water level might be too high today.";
            } else {
              waterData.levelCondition = "Water level is good!";
            }
          }
        });
        return waterData;
      })
      .catch(error => {
        return waterData.error = error;
      });
  }
};

export default helpers;
