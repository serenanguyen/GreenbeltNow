import React from "react";

import Header from "./Header";
import Search from "./Search";
import Admin from "./Admin";
import Weather from "./Weather";

class Main extends React.Component{
    render(){
        return(
            <div className="rowContainer">
                <Header />
                <div className="flexcontainer">
                    <Weather />
                    <Search />
                </div>

            </div>
        )
    }
};

module.exports = Main;