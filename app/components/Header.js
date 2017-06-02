import React from "react";

import Weather from "./Weather";

class Header extends React.Component {
    render(){
        return(
            <div className="fadeInDown">
                <img src={"./public/assets/images/map.png"}/>

                <Weather />

            </div>
        )
    }
};

module.exports = Header;