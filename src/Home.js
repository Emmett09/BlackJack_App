import React, { Component } from "react";
// import reference to Header file containing navigation bar
import Header from "./Header.js";
// import reference to homepage image from Images folder
import images from "./Images/aces.png";
// import Link feature from react-router-dom package, allows link to "/Game" page
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      // div to contain entire Home page
      <div className="Home">
        {/* element to render navigation bar at top of page */}
        <Header />
        {/* div to contain play button */}
        <div className="play-button">
          {/* "Play BlackJack" button that links to "Game" page */}
          <button className="btn btn-dark btn-circle btn-xl">
            <Link
              to="/Game"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1> Play BlackJack</h1>
            </Link>
          </button>
        </div>
        {/* div to contain Homepage image */}
        <div className="Home-image">
          {/* image tag to render image from Images folder */}
          <img className="card-img" src={images}></img>
        </div>
      </div>
    );
  }
}
export default Home;
