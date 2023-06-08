import React from 'react';
import './home.css';
import './index.css';
import {createBrowserRouter, Navigate, createHashRouter} from "react-router-dom"
import {Home} from "./home";
import ErrorPage from "./components/error-page";
import {Component1} from "./components/component1";
import {Component2} from "./components/component2";

const homepageUrl = process.env.PUBLIC_URL;

const router = createHashRouter([

    {
        path: "/*",
        element: <Home/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/component1",
                element: <Component1></Component1>
            },
            {
                path: "/component2",
                element: <Component2></Component2>
            }
        ]
    }
], {
    basename: `${homepageUrl}`,
});


export default router;