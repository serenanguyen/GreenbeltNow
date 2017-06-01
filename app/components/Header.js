import React from "react";

import Weather from "./Weather";

class Header extends React.Component {
    render(){
        return(
            <div>
                <p>Header</p>
                <div className="col-md-12">
                    <Weather />
                </div>
            </div>
        )
    }
};

module.exports = Header;