import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware,  createStore} from "redux";
import Template from "./pages/home/Template";

import {combineReducers} from "redux";
import reducers from './reducers';
import logger from "redux-logger";

const middleware = applyMiddleware(logger);
 
const createStoreWithMiddleware = (createStore(reducers,middleware));

class App extends React.Component {
render() {
return (
<Provider store={createStoreWithMiddleware}>
<Template />
</Provider>);
}
};

render(
<App />, document.getElementById("container")
);