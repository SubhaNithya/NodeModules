import React from "react";
import {
BrowserRouter,
Switch,
Route,
Redirect,
HashRouter,
ReactRouter
} from "react-router-dom";

import Template from "./pages/home/Template.js";
//import Child from "./pages/Home/Child.js";
//import Lifecycle from "./pages/Home/Lifecycle";
//import MaterialUIButton from "./pages/Home/MaterialUIButton";

const appRoutes = [
{
path: "/",
isExactPath: true,
component: <Template />
}
];

const routes = (
<BrowserRouter>
<Switch>

{appRoutes.map((routeItem, idx) => {
return <Route
key={routeItem.path}
path={routeItem.path}
exact={routeItem.isExactPath}
render={(params) => {
return routeItem.component;
}}
/>;
})}
</Switch>
</BrowserRouter>
);

export default routes;