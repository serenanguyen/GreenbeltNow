import React from "react";



class Header extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        console.log(e.target.alt);
    }

    render(){
        const handleClick = this.handleClick;
        return(
            <div className="fadeInDown">
                <h1>GREENBELT NOW</h1>
                <img src="https://i.imgur.com/5xW6mRh.png" useMap="#Map"/>
                <map name="Map" id="Map">
                    <area alt="Lost Creek" onClick={function(eventKey){handleClick(eventKey)}} href="#" shape="rect" coords="80,84,93,103" />
                    <area alt="Sculpture Falls" href="#" shape="rect" coords="149,153,164,173" />
                    <area alt="Twin Falls"  href="#" shape="rect" coords="215,269,231,288" />
                    <area alt="360 Loop" href="#" shape="rect" coords="302,313,323,331" />
                    <area alt="Gus Fruh" href="#" shape="rect" coords="327,271,345,293" />
                    <area alt="Spyglass" href="#" shape="rect" coords="400,203,414,223" />
                    <area alt="Campbell's Hole" href="#" shape="rect" coords="413,171,431,191" />
                    <area alt="Barton Creek Above Barton Springs" href="#" shape="rect" coords="512,155,525,173" />
                </map>
                <h2>Can I swim at the Greenbelt today</h2>
                <p>Select a Greenbelt access point from the dropdown menu to begin your search.</p>
            </div>
        )
    }
};

module.exports = Header;