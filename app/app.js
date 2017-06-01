// Inclue the React library
import React from "react";

import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import Main from "./components/Main";

const app = document.getElementById('app');



// ReactDOM.render((
//     <BrowserRouter>
//         <Main />
//     </BrowserRouter>
//     ), app);

ReactDOM.render(<Main />, app);