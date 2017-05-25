import React from "react";
import { FormGroup, FormControl, ControlLabel, Button, Panel } from 'react-bootstrap';

class Admin extends React.Component {
    // ~getInitialState
    constructor(props){
        // allows access to parent's properties as props
        super(props);
            // access to state variables
            this.state = {
                name: "",
                address: "",
                info: "",
                locationId: ""
            }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleChange(event){
       let newState = {};
       newState[event.target.id] = event.target.value;
       this.setState({
           name: newState.locationName,
           address: newState.locationAddress,
           info: newState.locationInfo,
           locationId: newState.locationId
       });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.props.setSubmit);

        // set parent to have the search term
        this.props.setSubmit({name:this.state.name, address:this.state.address, info:this.state.info, locationId:this.state.locationId});
    }

    render(){
        return(
            <div>
                <p>Admin</p>
                {/* form for grabbing data sent to db */}
                <Panel header="Location">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        controlId="locationName"
                        className="text-left"
                    >
                        <ControlLabel>Name</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="locationAddress"
                        className="text-left"
                    >
                        <ControlLabel>Address</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="locationInfo"
                        className="text-left"
                    >
                        <ControlLabel>Info</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.info}
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup
                        controlId="locationID"
                        className="text-left"
                    >
                        <ControlLabel>USGS ID</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.locationId}
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>

                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                </Panel>

            </div>
        )
    }
};

module.exports = Admin;