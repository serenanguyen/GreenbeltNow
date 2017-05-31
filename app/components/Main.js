import React from "react";

import Header from "./Header";
import Search from "./Search";
import Admin from "./Admin";

class Main extends React.Component{
    render(){
        return(
            <div className="container text-center">
                <div className="col-md-12">
                    <Header />
                </div>
                <div className="col-md-12">
                    <Search />
                </div>
                <div className="col-md-12">
                    <Admin />
                </div>


            </div>
        )
    }
};

module.exports = Main;