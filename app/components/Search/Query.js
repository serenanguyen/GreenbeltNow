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
        const updateSearch = this.props.updateSearch;
        this.setState({
            location: eventKey
        });
        helpers.getLocationObj(eventKey).then(function(response){
            updateSearch(response.data)
        });

    }



    render(){
        const handleSelect = this.handleSelect;
        // onSelect={function(eventKey){this.handleSelect(eventKey)}.bind(this)}
        return(
            <ButtonToolbar>
                <DropdownButton bsStyle="default" title="Choose a Location" id="dropdown"
                    onSelect={function(eventKey){handleSelect(eventKey)}}
                >
                    <MenuItem eventKey="Lost Creek">Lost Creek</MenuItem>
                    <MenuItem eventKey="Sculpture Falls">Sculpture Falls</MenuItem>
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

module.exports = Query;
