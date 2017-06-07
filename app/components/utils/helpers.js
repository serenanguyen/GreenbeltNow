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
            waterLevel: "",
            flowCondition: "",
            levelCondition: "",
            overallCondition: ""
        };
        if(resultID === locationID){
            response.map(function(data, index){
                const dataType = data.variable.variableDescription;
                const value = data.values[0].value[0].value;
                // if the data type is discharge
                if(dataType.includes('Discharge')){
                    // change the object prop to this value
                    waterData.discharge = value;
                    if(value < 5){
                        waterData.flowCondition = "Water flow is too low!";
                    } else {
                        waterData.flowCondition = "Water flow is fine!";
                    }
                // if the data type is water height
                } else if(dataType.includes('height')){
                    // change the prop to this value
                    waterData.waterLevel = value;
                    if(value < 2){
                        waterData.levelCondition = "Water level is too low!";
                    } else if (2 < value < 5) {
                        waterData.levelCondition = "Water level is slightly low!";
                    } else {
                        waterData.levelCondition = "Water level is great!";
                    }
                }
            })
            if(waterData.discharge > 5 && ( 2 < waterData.waterLevel < 5)){
                waterData.overallCondition = "Water level is a little low, swim with caution!";
            } else if (waterData.discharge > 5 && waterData.waterLevel > 5){
                waterData.overallCondition = "Water conditions look great! Have fun swimming!";
            } else {
                waterData.overallCondition = "Conditions aren't optimal. Try Barton Springs Pool or Deep Eddy Pool instead!";
            }
        }

        // return new waterData obj to function to be used in Search component
        return waterData;
    },
    // get weather response and send only certain data back in an object
    getWeather(weather){
        weather = {
            temperature: "",
            condition: "",
            image: ""
        }
        return axios.get("api/weather")
            .then((response) => {
                weather.temperature = response.data.current.temperature;
                weather.condition = response.data.current.skytext;
                weather.image = response.data.current.imageUrl;
                return weather;
            })
    }
};

module.exports = helper;
