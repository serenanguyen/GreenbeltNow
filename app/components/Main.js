import React from "react";

import Header from "./Header";
import Search from "./Search";
import Admin from "./Admin";

class Main extends React.Component{
    render(){
        return(
            <div className="flexcontainer">
                <div className="header">
                    <Header />
                </div>
                <div className="search">
                    <Search />
                </div>
                <div className="admin">
                    {/*<Admin />*/}
                </div>


            </div>
        )
    }
};

module.exports = Main;