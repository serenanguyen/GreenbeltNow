import React from "react";
import helpers from "./utils/helpers";

class Admin extends React.Component {
  // ~getInitialState
  constructor(props) {
    // allows access to parent's properties as props
    super(props);
    // access to state variables
    this.state = {
      name: "",
      address: "",
      info: "",
      locationid: ""
    };
    // access Admin state
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // when there is a change in the form change the states
  handleChange(event) {
    let newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  // when you submit send the data from the form
  handleSubmit(event) {
    event.preventDefault();
    helpers.postLocation(
      this.state.name,
      this.state.address,
      this.state.info,
      this.state.locationid
    );
  }

  render() {
    return (
      <div>
        <p>Admin</p>
        {/* form for grabbing data sent to db */}
        <div className="panel panel-default">
          <div className="panel-heading">Location</div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                value={this.state.name}
                className="form-control"
                id="name"
                onChange={this.handleChange}
                required
              />
              <label>Address</label>
              <input
                value={this.state.address}
                className="form-control"
                id="address"
                onChange={this.handleChange}
                required
              />
              <label>Info</label>
              <input
                value={this.state.info}
                className="form-control"
                id="info"
                onChange={this.handleChange}
                required
              />
              <label>USGS ID</label>
              <input
                value={this.state.locationid}
                className="form-control"
                id="locationid"
                onChange={this.handleChange}
                required
              />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = Admin;
