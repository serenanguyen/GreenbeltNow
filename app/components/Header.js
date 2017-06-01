import React from "react";

import Weather from "./Weather";

class Header extends React.Component {
    render(){
        return(
            <div className="fadeInDown">

                <Weather />

            </div>
        )
    }
};

module.exports = Header;