import React from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import helpers from "../utils/helpers";

class Query extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            location: "",
            allLocations: []
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.renderLocations = this.renderLocations.bind(this);
        // get all locations from database and set it as allLocations state
        helpers.getLocations().then((response) => {
            this.setState({ allLocations: response.data})
        })
    }


    handleSelect(eventKey){
        // for binding/ scope
        const updateSearch = this.props.updateSearch;
        // set state to location name which is eventKey
        this.setState({
            location: eventKey
        });
        // get location object using the eventKey
        helpers.getLocationObj(eventKey).then(function(response){
            // setLocation is expecting newLocation so send response.data
            updateSearch(response.data)
        });

    }

    // render menu items for each location in database
    renderLocations(){
        return this.state.allLocations.map((location, index) =>
            <MenuItem key={index} eventKey={location.name}>{location.name}</MenuItem>
        )
    }


    render(){
        const handleSelect = this.handleSelect;
        const renderLocations = this.renderLocations;
        return(
            <ButtonToolbar className="location fadeInDown">
                <DropdownButton className="header" bsStyle="default" title="Choose a Location" id="dropdown"
                    onSelect={function(eventKey){handleSelect(eventKey)}}
                >
                    {renderLocations()}
                </DropdownButton>
            </ButtonToolbar>
        )
    }

};

module.exports = Query;
