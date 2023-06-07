# New to using routing?

## The 3 most important things to know!

## 1) Router configuration 

The ```` <RouterProvider/>```` Element in index.tsx uses the router configuration that you need to define und export sperately for your whole application. For example this is how it could look like:
````typescript
const homepageUrl = process.env.PUBLIC_URL;
const router = createBrowserRouter([

    {
        path: `${homepageUrl}`,
        element: <Home/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: `${homepageUrl}/component1`,
                element: <Component1></Component1>
            },
            {
                path: `${homepageUrl}/component2`,
                element: <Component2></Component2>
            }
        ]
    }
]);

export default router;
````
It always needs a root component at the  root path, wich is "/" or "homepageUrl", but you can use ````<Navigate to="DESTINATION_PATH"/> ````  if you want to go directly to a child.
Also if you need to share states between your components, you can alternatively don't export the router but return the ```` <RouterProvider/>```` and export the App as you usually do like this:
````typescript
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
````

But if you do it this way don't forget to change the index.tsx!


##  2)  Root component

You have to declare a root component (here called "home.tsx") for the root path wich typically contains a part of your application that should always be rendered.
For example, in this application it has to contain the top menu where you can choose the different components from.

Important: When writing the home component you need to declare where exactly the children components should be rendered inside the home component via the placement of the ````<Outlet/>````  (Look into home.tsx).


## 3) Switching between children

This functionallity also should be set in the home component via the `````<Link to={PATH} />````` (Look into home.tsx).
Make sure that the path matches identically the declared paths you specified in the router configuration!
