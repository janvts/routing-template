# New to using routing?

## The 3 most important things to know!

## 1) Router configuration 

The `<RouterProvider/>` element in `index.tsx` uses the router configuration that you need to define separately for your entire application. For example, this is how it looks in this template:
````typescript
const router = createHashRouter([

    {
        path: "/",
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
]);

export default router;
````
It always requires a root component at the root path, which is ````"/"````. However, if you want to go directly to a child component, you can use ````<Navigate to="DESTINATION_PATH"/>````.
````typescript
children: [
            ...
                {
                    path: "", //Or another path you want to redirect
                    element: <Navigate to="ADD_DESIRED_COMPONENT" replace/>,
                },
            ...
            ]
````

The choice of router is also crucial. In this case, we use the hash router, which is typically not recommended. There are several reasons for this. Firstly, it leads to poor URL aesthetics (you will see `````/#/````` in the URL). Additionally, it has limitations in terms of SEO, compatibility with web standards, and manipulating the URL hash fragment without affecting the actual navigation history of the pages. These concerns are better addressed by the browser router. However, we are using hash-based routing here because GitHub Pages only works with hash-based routing. For more information on choosing a router, you can refer to the following link: [Picking a Router](https://reactrouter.com/en/main/routers/picking-a-router). In short, if you are not hosting from GitHub Pages, the common choice is to initialize with createBrowserRouter(...).

Another important aspect is sharing states between the routed components. If you need to share states between the components of your application, you have an alternative approach for exporting the defined configuration. Instead of exporting the router as before, you can return the `````<RouterProvider/>````` and export the app as you usually do, like this:
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

You need to declare a root component (in this case, the component "home.tsx") for the root path, which typically contains a part of your application that should always be rendered. For example, in this application, it should contain the top menu where you can choose different components.

Important: When writing the root component, you need to specify where the child components should be rendered within the home component by placing the ````<Outlet/>```` component.

Example:
````typescript
    <Layout>
    /*Add root content here wich sould always be rendered*/
            {outlet ? (
                <Outlet/>
            ) : (
                /* Add content here wich is shown when no child is rendered in the Outlet*/
            )}
    </Layout>
````


## 3) Switching between children

This functionallity also should be set in the root component via the `````<Link to={PATH} ></Link>````` .
Make sure that the path matches identically the declared paths you specified in the router configuration!


#  Deploy your app on github pages

TODO
### 1) Create a empty repository on GitHub
### 2) Create a clone of the (still empty) repository in your IDE and create a react app in this repository 
### 3) TODO

