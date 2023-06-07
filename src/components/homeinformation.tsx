import {useRouteError} from "react-router-dom";


export default function HomeInformation() {

    return (
        <div id="error-page">
            <h1>Homepage</h1>
            <p>This is the root component</p>
            <p>
                <i> use "Navigate" to go directly to a component in the router!</i>
            </p>
        </div>
    );
}