import React from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import helpers from "../utils/helpers";

import { observer, inject } from 'mobx-react';

@inject('AppState')
@observer
class Query extends React.Component{

    constructor(props){
        super(props);
        this.renderLocations = this.renderLocations.bind(this);
    }

    // render menu items for each location in database
    renderLocations(){
        const locations = this.props.AppState.locations;
        const locationKeys = Object.keys(locations);
        return locationKeys.map((location, index) =>
            <MenuItem key={index} eventKey={location}>{locations[location].name}</MenuItem>
        )
    }

    render(){
        const renderLocations = this.renderLocations;
        return(
            <ButtonToolbar className="location fadeInDown">
                <DropdownButton className="header" bsStyle="default" title="Choose a Location" id="dropdown"
                    onSelect={(eventKey)=>{this.props.AppState.updateSearch(eventKey)}}
                >
                    {renderLocations()}
                </DropdownButton>
            </ButtonToolbar>
        )
    }

};

module.exports = Query;
