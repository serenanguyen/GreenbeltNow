import React from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import helpers from "../utils/helpers";

class Query extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            location: ""
        };
        this.handleSelect = this.handleSelect.bind(this);
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

    render(){
        const handleSelect = this.handleSelect;
        return(
            <ButtonToolbar>
                <DropdownButton bsStyle="default" title="Choose a Location" id="dropdown"
                    onSelect={function(eventKey){handleSelect(eventKey)}}
                >

                     {/* should be dynamically generated based off database data */}
                    <MenuItem eventKey="Lost Creek">Lost Creek</MenuItem>
                    <MenuItem eventKey="Sculpture Falls">Sculpture Falls</MenuItem>
                    <MenuItem eventKey="Twin Falls">Twin Falls</MenuItem>
                    <MenuItem eventKey="360 Loop">360 Loop</MenuItem>
                    <MenuItem eventKey="Gus Fruh">Gus Fruh</MenuItem>
                    <MenuItem eventKey="Spyglass">Spyglass</MenuItem>
                    <MenuItem eventKey="Campbell's Hole">Campbell's Hole</MenuItem>
                    <MenuItem eventKey="Barton Creek Above Barton Springs Pool">Barton Creek Above Barton Springs Pool</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
        )
    }

};

module.exports = Query;
