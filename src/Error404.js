import React, { Component } from "react";
// import reference to Header file containing navigation bar
import Header from "./Header.js";
import error from "./Images/404-error-page.png";
import { Link } from "react-router-dom";

class Error404 extends Component {
  render() {
    return (
      // div wrapping all page elements
      <div className="Error404">
        {/* element to render navigation bar at top of page */}
        <Header />
        {/* div wrapping text that communicates to the user they have reached an undefined route path  */}
        <div>
          <img className="card-img" src={error}></img>
        </div>
        <div className="homeButton">
          <div className="hButton">
            <button className="btn btn-light btn-circle btn-xl">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inheirit" }}
              >
                RETURN TO HOME
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Error404;
