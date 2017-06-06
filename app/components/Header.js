import React from "react";



class Header extends React.Component {
    render(){
        return(
            <div className="fadeInDown">
                <h1>GREENBELT NOW</h1>
                <img src="https://i.imgur.com/5xW6mRh.png" className="img-responsive"/>
                <h2>Can I swim at the Greenbelt today</h2>
                <p>Select a Greenbelt access point from the dropdown menu to begin your search.</p>

            </div>
        )
    }
};

module.exports = Header;