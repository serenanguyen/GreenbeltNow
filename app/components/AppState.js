// import helpers for making API calls
import helpers from "./utils/helpers";

import { observable, action } from 'mobx';

class AppState {
    @observable isLoading = false;
    @observable query = {};
    @observable results = {};
    @observable waterData = {};

    @action updateSearch(newLocation) {
        helpers.getLocationObj(newLocation).then((response)=>{
            this.query = response.data.locationID;
            helpers.runQuery(this.query)
                .then((response)=>{
                    this.results = response.data.value.timeSeries;
                })
        })
    } 
}

export default new AppState();