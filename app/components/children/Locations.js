var React = require("react");

var Locations = React.createClass({
    getInitialState: function(){
        return{location:""};
    },

    render: function(){
        return(
            <div>
                <p>Locations drop down</p>
            </div>
        )
    }
});

module.exports = Locations;