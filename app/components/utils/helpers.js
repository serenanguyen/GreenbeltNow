import axios from "axios";

const helper = {

    // handling selection of location in dropdown menu
    handleSelect(eventKey){
        var eventKey = {
            name: eventKey
        }
      return axios.post("/api/result", eventKey);
    },

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

    // running query
    runQuery(search){
        var queryURL = "https://waterservices.usgs.gov/nwis/iv/?site=" + locationID + "&format=json&parameterCd=00065,00060&siteStatus=active";
        return axios.get(queryURL).then(function(response){
            if(response.data){
                console.log(results.data);
            }
        });
    }
};

module.exports = helper;
