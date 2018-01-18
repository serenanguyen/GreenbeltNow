import React from "react";

import helpers from "./utils/helpers";
import { observer, inject } from 'mobx-react';

@inject('AppState')
@observer
class Header extends React.Component {
    render(){
        return(
            <div className="fadeInDown">
                <h1>GREENBELT NOW</h1>
                <img src="https://i.imgur.com/5xW6mRh.png" useMap="#Map"/>
                <map name="Map" id="Map">
                    <area alt="Lost Creek" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="80,84,93,103" />
                    <area alt="Sculpture Falls" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="149,153,164,173" />
                    <area alt="Twin Falls"  onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="215,269,231,288" />
                    <area alt="360 Loop" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="302,313,323,331" />
                    <area alt="Gus Fruh" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="327,271,345,293" />
                    <area alt="Spyglass" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="400,203,414,223" />
                    <area alt="Campbell's Hole" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="413,171,431,191" />
                    <area alt="Barton Creek Above Barton Springs Pool" onClick={(eventKey)=>{this.props.AppState.updateSearch(eventKey.target.alt)}} href="#" shape="rect" coords="512,155,525,173" />
                </map>
                <h2>Can I swim at the Greenbelt today</h2>
                <p>Select a Greenbelt access point on the map or dropdown menu to begin your search.</p>
            </div>
        )
    }
};

module.exports = Header;