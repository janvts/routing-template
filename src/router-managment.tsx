import React from 'react';
import './home.css';
import './index.css';
import {createBrowserRouter} from "react-router-dom"
import {Home} from "./home";
import ErrorPage from "./components/error-page";
import {Component1} from "./components/component1";
import {Component2} from "./components/component2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "component1",
                element: <Component1></Component1>
            },
            {
                path: "component2",
                element: <Component2></Component2>
            }
        ]
    }
]);

export default router;


///////////EXPLANATION//////////
/*Here are the 3 most important things you need to know for using routing:

(1) Router configuration: The <RouterProvider/> Element in index.tsx uses the router configuration that you need to define und export from here.
It always needs a root component at path "/" but you can use "Navigate" if you want to go directly to a child.
Also if you need to share states between your components, you can alternatively don't export the router but return the RouterProvider and export the App as you usually do like this:
But if you do it this way don't forget to change the index.tsx!

..............
function RoutedApp(){
    // initialise states here, give them to the components as props!
    const router = createBrowserRouter([
        {
            ....    DEFINE PATHS       ....
        }
    ]);
    return  <RouterProvider router={router}/>
}

function App() {
    return (
        <div>
            <RoutedApp />
        </div>
    );
}

export default App;
............


(2) Home Component: You have to declare a home component for the root path "/" wich typically contains a part of your application that should always be rendered.
For example, in this application it has to contain the top menu where you can choose the different components from.
Important: When writing the home component you need to declare where exactly the children components should be rendered inside the home component via the placement of the <Outlet/>  (Look into home.tsx).

(3) Switching between children: this functionallity also should be set in the home component via the <Link to={PATH} /> (Look into home.tsx).
Make sure that the path matches identically the declared paths you specified in the router configuration here!

*/
