var React = require("react");

var Header = require("./children/Header");
var Locations = require("./children/Locations");
var Results = require("./children/Results");

// helper for making ajax requests to our api
var helpers = require("./utils/helpers");

var Main = React.createClass({

    render: function(){
        return(
            <div className="container">
                <div className="col-md-12">
                    <Header />
                </div>
                <div className="col-md-12">
                    <Locations />
                </div>
                <div className="col-md-12">
                    {/*{this.props.children}*/}
                    <Results />
                </div>


            </div>
        )
    }
});

module.exports = Main;