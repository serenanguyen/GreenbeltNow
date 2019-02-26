import React from "react";

import Header from "./Header";
// import Admin from "./Admin";
import Query from "./Search/Query";
import Results from "./Search/Results";
import Weather from "./Weather";

import { inject, observer } from "mobx-react";

@inject("AppState")
@observer
class Main extends React.Component {
  render() {
    return (
      <div className="rowContainer">
        <Header />
        <div className="flexcontainer">
          <Weather />
          <Query />
          <Results />
        </div>
      </div>
    );
  }
}

module.exports = Main;
