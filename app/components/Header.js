import React from "react";



class Header extends React.Component {
    render(){
        return(
            <div className="fadeInDown">
                <img src="https://i.imgur.com/5xW6mRh.png"/>
                <h2>Can I swim at the Greenbelt today?</h2>
                <p>Select a Greenbelt access point from the dropdown menu to begin your search.</p>

            </div>
        )
    }
};

module.exports = Header;