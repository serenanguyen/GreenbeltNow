import React from "react";

import Header from "./Header";
import Search from "./Search";
import Admin from "./Admin";

class Main extends React.Component{
    render(){
        return(
            <div className="flexcontainer">
                <div>
                    <Header />
                </div>
                <div>
                    <Search />
                </div>
                <div>
                    {/*<Admin />*/}
                </div>


            </div>
        )
    }
};

module.exports = Main;