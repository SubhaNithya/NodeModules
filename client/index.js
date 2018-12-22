import React from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";
import routes from "./routes.js";
import {applyMiddleware,  createStore} from "redux";
import Home from "./pages/Home/Home.js";
import {combineReducers} from "redux";

const rootReducer = combineReducers({  });
const store = createStore(rootReducer);

class App extends React.Component {
render() {
return (
<Provider store={store}>
<Home />
</Provider>);
}
};

render(
<App />, document.getElementById("container")
);