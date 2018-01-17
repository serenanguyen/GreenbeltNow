import React from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import helpers from "../utils/helpers";

import { observer, inject } from 'mobx-react';

@inject('AppState')
@observer
class Query extends React.Component{

    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
        this.renderLocations = this.renderLocations.bind(this);
    }

    handleSelect(eventKey){
        this.props.AppState.isLoading = true;
        this.props.AppState.updateSearch(eventKey);
    }

    // render menu items for each location in database
    renderLocations(){
        const allLocations = this.props.AppState.allLocations;
        return allLocations.map((location, index) =>
            <MenuItem key={index} eventKey={location.name}>{location.name}</MenuItem>
        )
    }

    render(){
        const handleSelect = this.handleSelect;
        const renderLocations = this.renderLocations;
        return(
            <ButtonToolbar className="location fadeInDown">
                <DropdownButton className="header" bsStyle="default" title="Choose a Location" id="dropdown"
                    onSelect={(eventKey)=>{handleSelect(eventKey)}}
                >
                    {renderLocations()}
                </DropdownButton>
            </ButtonToolbar>
        )
    }

};

module.exports = Query;
