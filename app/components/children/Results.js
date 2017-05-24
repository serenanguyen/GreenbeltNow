var React = require("react");

var Results = React.createClass({
    getInitialState: function(){
        return{results:""};
    },

    render: function(){
        return(
            <div>
                <p>Results</p>

            </div>
        )
    }
});

module.exports = Results;