import React from "react";
import ReactDom from "react-dom";
import reactTapEventPlugin from "react-tap-event-plugin";
import App from "./components/App";

reactTapEventPlugin();

ReactDom.render(
    <App />,
    document.getElementById("app")
);