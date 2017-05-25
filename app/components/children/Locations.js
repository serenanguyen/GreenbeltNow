import React from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import helpers from "../utils/helpers";

class Locations extends React.Component{

    render(){
        return(
            <ButtonToolbar>
                <DropdownButton bsStyle="default" title="Choose a Location" id="dropdown"
                    onSelect={function(eventKey){helpers.handleSelect(eventKey)}}
                >
                    <MenuItem eventKey="Lost Creek">Lost Creek</MenuItem>
                    <MenuItem eventKey="08155240">Sculpture Falls</MenuItem>
                    <MenuItem eventKey="Twin Falls">Twin Falls</MenuItem>
                    <MenuItem eventKey="360">360</MenuItem>
                    <MenuItem eventKey="Gus Fruh">Gus Fruh</MenuItem>
                    <MenuItem eventKey="Spyglass">Spyglass</MenuItem>
                    <MenuItem eventKey="Campbell's Hole">Campbell's Hole</MenuItem>
                    <MenuItem eventKey="Barton Creek">Barton Creek</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        )
    }

};

module.exports = Locations;