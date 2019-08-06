import React from "react";
import Map from "./components/Map";
import Dropdown from "./components/Dropdown";
import Results from './components/Results';
import Weather from "./components/Weather";
import Footer from "./components/Footer";

import "./assets/style.css";

const App = () => {
  return (
    <div className="App">
      <Map />
      <div className="query-container">
        <Weather />
        <Dropdown />
        <Results />
      </div>
      <Footer />
    </div>
  );
}

export default App;
