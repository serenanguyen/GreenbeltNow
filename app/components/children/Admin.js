import React from "react";

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
            };
        // access Admin state
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // when there is a change in the form change the states
   handleChange(event){
       let newState = {};
       newState[event.target.id] = event.target.value;
       this.setState(newState);
    }

    // when you submit send the data from the form
    handleSubmit(event){
        event.preventDefault();
        // set parent to have the search term
        this.props.setSubmit({name:this.state.name, address:this.state.address, info:this.state.info, locationId:this.state.locationId});
    }

    render(){
        return(
            <div>
                <p>Admin</p>
                {/* form for grabbing data sent to db */}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Location
                    </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Name
                        </label>
                            <input
                                value={this.state.name}
                                className="form-control"
                                id="name"
                                onChange={this.handleChange}
                                required
                            />
                        <label>
                            Address
                        </label>
                        <input
                            value={this.state.address}
                            className="form-control"
                            id="address"
                            onChange={this.handleChange}
                            required
                        />
                        <label>
                            Info
                        </label>
                        <input
                            value={this.state.info}
                            className="form-control"
                            id="info"
                            onChange={this.handleChange}
                            required
                        />
                        <label>
                            USGS ID
                        </label>
                        <input
                            value={this.state.locationId}
                            className="form-control"
                            id="locationId"
                            onChange={this.handleChange}
                            required
                        />
                        <button className="btn btn-primary"
                                type="submit">
                            Submit
                        </button>
                    </div>
                </form>
                </div>

            </div>
        )
    }
};

module.exports = Admin;