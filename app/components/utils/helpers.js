import axios from "axios";

const helper = {
    handleSelect(eventKey){
        var queryURL = "https://waterservices.usgs.gov/nwis/iv/?site=" + eventKey + "&format=json&parameterCd=00065,00060&siteStatus=active";
        return axios.get(queryURL).then(function(response){
            if(response.data){
                console.log(response.data);
            }
        });


    },
    postLocation(result){
        console.log(result)
        // return axios.post("/api", {
        //
        // })
    },

    runQuery(search){
        var queryURL = "https://waterservices.usgs.gov/nwis/iv/?site=" + locationID + "&format=json&parameterCd=00065,00060&siteStatus=active";
        return axios.get(queryURL).then(function(response){
            if(response.data){
                console.log(results.data);
            }
        });
    }
}

module.exports = helper;

