# Getting Started with Routing: Key Concepts for Beginners

In this brief guide, we will explore the fundamental concepts that are essential for a complete understanding of this template. 

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

export function App() {
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

This functionallity also should be set in the root component via the `````<Link to={PATH} ></Link>````` . There are other ways to do that depending on your needs, e.g. Navlink or useNav, you can read about them [here](https://reactrouter.com/en/main/components/navigate).
Make sure that the path matches identically the declared paths you specified in the router configuration!


#  Further information

There are several other important concepts to consider when working with routing that cannot be covered in this brief guide. This guide primarily focuses on setting up basic routing for a template that consists of a top menu.
However, in the following chapter, we will briefly explore some additional aspects that may be helpful to you.

## Using a custom 404 Page

If your application encounters unmatched routes, you should create a "404 Not Found Page" that matches the style of your website. This page will always be displayed when the user attempts to access a non-existing route. Additionally, redirecting the user from there or providing an option to navigate to an existing page, such as the homepage, will enhance the appeal and user-friendliness of your application.
The page should be named "404.html" and placed in the public folder. In this template, the user is provided with the option to return to the homepage.

Example:
````html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Not Found</title>
    <style>
        /* Add some styling to your 404 page */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 40px;
        }
    </style>
</head>
<body>
<h1>Page Not Found</h1>
<p>Sorry, but the page you were trying to view does not exist.</p>
<p>
    <a href="/routing-template">Go back to the homepage</a>
</p>
</body>
</html>
````
Alternatively, you can also write an error element and add it to the router configuration, you can also find an example for that in the template.


## Using a basename

In some cases, such as hosting your app in a subdirectory, using different environments, or implementing server-side rendering, the use of a basename can be beneficial.
To choose the appropriate basename, ensure that it matches the subdirectory or the designated base URL where your app will be hosted. It is recommended to set the host URL as the basename. You can easily retrieve the host URL using ```process.env.PUBLIC_URL``` and add it to the configuration like this:
````typescript
const router = createBrowserRouter([

        {
            .... YOUR PATHS ...
        }
    ],
    {
        basename: `${process.env.PUBLIC_UR}`,
    });
````

## Choosing between nested and non-nested routing

The configuration in this template uses nested routing. Nested routing means that routes are organized hierarchically, so that you are able to render components inside other components, rather than calling them indepentend of each other requesting a new document.
If the components of your application are independent of each other and should be accessed via specific URLs, you can use non-nested routing. If that would be the case for this template,  we would configure our router this way:

````template
const router = useRoutes([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: '/component1',
      element: <Component1 />
    },
    {
      path: '/component2',
      element: <Component2 />
    }
  ]);
````
## Deploying your App on GitHub Pages

To deploy your app on GitHub Pages, follow the steps below:

**(1) Create an empty repository on GitHub**

Create a new repository on GitHub where you'll deploy your app. Note down your repository's URL for later use.

**(2) Install gh-pages in your app**

Run the following command:
````
 npm install gh-pages --save-dev
````


**(3) Update package.json**

Open your `package.json` file and add the following properties:

Under the `"version"` property, add a `"homepage"` property. It should contain the URL of your GitHub Pages site, which consists of your GitHub username and repository name. For example:

```json
{
  "name": "routing-template",
  "version": "0.1.0",
  "homepage": "https://janvts.github.io/routing-template/",
```
Under the existing "scripts" property, add two new scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
```
The "predeploy" script runs the build process before deploying, and the "deploy" script deploys your app using gh-pages.

**(4) Add a remote to your repository**

In your app's directory, run the following command to add a remote named "origin" pointing to your repository's URL
```
git remote add origin https://github.com/{username}/{repo-name}.git
```
If you are prompted for authentication, use a personal access token instead of your regular password to prevent authentication problems. You can generate a personal access token in your GitHub account settings under "Developer settings."

**(5) Deploy your app**

To deploy your app, run the following command:
````
npm run deploy
````
This command will build your app and deploy it to the gh-pages branch of your repository.

Note: If you experience issues with refreshing or a blank screen on your deployed app, make sure you are using the correct router. Only the hash router can be used with GitHub Pages.