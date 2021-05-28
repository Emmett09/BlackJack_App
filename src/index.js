import React from "react";
// import react-dom package to allow for interaction with the DOM
import ReactDOM from "react-dom";
// import reference to the About page
import About from "./About";
// import reference to the Home page
import Home from "./Home";
// import reference to the Error404 page not found page, used to indicate the user has reached an undefined page of the application
import Error404 from "./Error404";
// import bootstrap style sheet to allow for styling of page elements
import "bootstrap/dist/css/bootstrap.css";
// import necessary features from react-router-dom package to allow for page routing
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import reference to app file
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // tool from React to highlight potential problems in an applciation during development
  <React.StrictMode>
    {/* used to keep the UI in sync with the URL to allow for routing */}
    <BrowserRouter>
      {/* Switch is used to render each route exclusively, once a route has been found Switch will stop looking for matches and render the first route it matches */}
      <Switch>
        {/* path to the /Game page which is created using the App.js file */}
        <Route path="/Game" exact component={App} />
        {/* path to the /About page */}
        <Route path="/About" exact component={About} />
        {/* path to the Home page which is displayed when the applciation url ends with "/"" */}
        <Route path="/" exact component={Home} />
        {/* route for any other path that does not match any of those defined above, this route will lead to the Error404 file which displays an error message that the page the user ahs searched for does not exist */}
        <Route path="" component={Error404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
