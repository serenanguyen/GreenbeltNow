// Inclue the React library
import React from "react";

import ReactDOM from "react-dom";

import Main from "./components/Main";
import AppState from './components/AppState';

import { Provider } from 'mobx-react'; 

const app = document.getElementById('app');
const stores = {AppState};

ReactDOM.render(
    <Provider {...stores}>
        <Main />
    </Provider>
, app);