import React from "react";

import Header from "./children/Header";
import Locations from "./children/Locations";
import Results from "./children/Results";
import Admin from "./children/Admin";

class Main extends React.Component{
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
                    <Admin />
                </div>


            </div>
        )
    }
};

module.exports = Main;