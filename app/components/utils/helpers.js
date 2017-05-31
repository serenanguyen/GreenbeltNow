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
    }
};

module.exports = helper;
