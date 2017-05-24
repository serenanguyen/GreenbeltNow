// Inclue the React library
import React from "react";

import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, HashRouter} from "react-router-dom";

// reference components
import Main from "./components/Main";
import Results from "./components/children/Results";

const app = document.getElementById('app');

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={Main}>
            {/*<Route path="results" component={Results}></Route>*/}
        </Route>
    </HashRouter>,
    app);