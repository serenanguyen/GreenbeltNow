import React from "react";

// import query and results components
import Query from "./Search/Query";
import Results from "./Search/Results";

// import helpers for making API calls
import helpers from "./utils/helpers";

// create Search component
class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            query: {}
        };
        this.setLocation = this.setLocation.bind(this);
    }
    // passed to child components
    setLocation(newLocation){
        this.setState({
            query: newLocation
        })
        helpers.runQuery(this.state.query.locationID)
            .then(function(response){
                console.log(response)
            })


    }

    render(){
        console.log(this.state);
        return(
            <div>
                <p>Search</p>
                <Query updateSearch={this.setLocation} />
                <Results results={this.state.results} />
            </div>
        );
    }
}

module.exports = Search;

