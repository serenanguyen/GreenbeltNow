import React from "react";

import Header from "./children/Header";
import Locations from "./children/Locations";
import Results from "./children/Results";
import Admin from "./children/Admin";

// helper for making ajax requests to our api
import helpers from "./utils/helpers";

class Main extends React.Component{
    setSubmit(name, address, info, locationId){
        this.setState({
            name: name,
            address: address,
            info: info,
            locationId: locationId
        });
    }

    render(){
        return(
            <div className="container text-center">
                <div className="col-md-12">
                    <Header />
                </div>
                <div className="col-md-12">
                    <Locations />
                </div>
                <div className="col-md-12">
                    <Results />
                </div>
                <div className="col-md-12">
                    <Admin setSubmit/>
                </div>


            </div>
        )
    }
};

module.exports = Main;