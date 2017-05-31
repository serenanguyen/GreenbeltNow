import axios from "axios";

const helper = {

    // posting new location to /api/locations
    postLocation(name, address, info, locationid){
        var newLocation = {
            name: name,
            address: address,
            info: info,
            locationid: locationid
        };
        return axios.post("/api/locations", newLocation);
    },

    // getting locations from /api/locations
    getLocations(){
        return axios.get("/api/locations")
    },

    // get location object with matching name
    getLocationObj(locationName){
        console.log(locationName);
      return axios.get("/api/result", {
          params: {
              name: locationName
          }
      })
    },

    // running query
    runQuery(locationID){
        return axios.get("https://waterservices.usgs.gov/nwis/iv/", {
            params: {
                site: locationID,
                format: "json",
                parameterCd: "00065,00060",
                siteStatus: "active"
            }
        })
    },
    // parse through json response
    getWaterData(locationID, response, waterData){
        // checking if query data matches location id
        const resultID = response[0].sourceInfo.siteCode[0].value;
        waterData = {
            discharge: "",
            waterLevel: ""
        };
        if(resultID === locationID){
            response.map(function(data, index){
                const dataType = data.variable.variableDescription;
                const value = data.values[0].value[0].value;
                // console.log(data);
                if(dataType.includes('Discharge')){
                    console.log("discharge", value);
                    waterData.discharge = value;

                } else if(dataType.includes('height')){
                    console.log("water level", value);
                    waterData.waterLevel = value;
                }
            })
        }
        // return new waterData obj to function to be used in Search component
        return waterData;
    }
};

module.exports = helper;
