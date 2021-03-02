//Navigation code sourced from: https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark" >
        <div class="container">
          <Link class="navbar-brand" to="/">
            Pattern Personality Quiz
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Quiz
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/browse" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/browse">
                  Browse
                </Link>
              </li>
              {props.googleObj ? 
              <li
                class={`nav-item  ${
                  props.location.pathname === "/mypatterns" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/mypatterns">
                  My Patterns
                </Link>
              </li>
              :null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);