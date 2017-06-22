import React from "react";

import Header from "./Header";
// import Search from "./Search";
// import Admin from "./Admin";
import Query from "./Search/Query";
import Results from "./Search/Results";
import Weather from "./Weather";

// import helpers for making API calls
import helpers from "./utils/helpers";

class Main extends React.Component{

    constructor(props){
        super(props);
        // create query and results state
        this.state = {
            // query stores location object from database
            query: {},
            // results stores query response
            results: {},
            // water values from query response
            waterData: {}
        };
        this.setLocation = this.setLocation.bind(this);
    }

    setLocation(newLocation){
        this.setState({
            query: newLocation
        })
        // run query using location id from location object stored in query state
        helpers.runQuery(this.state.query.locationID)
        // binds this
            .then((response) => {
                // sending response data to results state
                this.setState({ results: response.data.value.timeSeries })
            })
            .then(() => {
                this.setState({
                    waterData: helpers.getWaterData(this.state.query.locationID, this.state.results)
                })
            })

    }

    render(){
        return(
            <div className="rowContainer">
                <Header updateSearch={this.setLocation}/>
                <div className="flexcontainer">
                    <Weather />
                    {/*<Search />*/}
                    <Query updateSearch={this.setLocation}/>
                    <Results locationData={this.state.query}
                             waterData={this.state.waterData} />
                </div>

            </div>
        )
    }
};

module.exports = Main;