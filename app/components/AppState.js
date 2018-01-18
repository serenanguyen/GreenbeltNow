// import helpers for making API calls
import helpers from "./utils/helpers";

import { observable, action } from 'mobx';

class AppState {
    @observable isLoading = false;
    @observable location = {};
    @observable results = {};
    @observable waterData = {};
    @observable weather = {};
    @observable allLocations = [];

    constructor() {
        helpers.getLocations().then((response) => {
                this.allLocations = response.data
            })   
    }

    @action updateSearch(newLocation) {
        this.isLoading = true;
        helpers.getLocationObj(newLocation).then((response)=>{
            var locationID = response.data.locationID;
            this.location = response.data;
            helpers.runQuery(locationID)
                .then((response)=>{
                    this.results = response.data.value.timeSeries;
                })
                .then(()=> {
                    this.waterData = helpers.getWaterData(this.location.locationID, this.results);
                    this.isLoading = false;
                })
        })
    } 
}

export default new AppState();