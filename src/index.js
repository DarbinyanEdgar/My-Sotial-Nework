import store from "./Redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppSotial from "./AppSotial";
import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";


// let rerenderEntireTree = () => {


    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppSotial  />
                </Provider>
            </BrowserRouter>,
        </React.StrictMode>,

        document.getElementById('root')
    )

// }
//
//
// rerenderEntireTree()
// //
