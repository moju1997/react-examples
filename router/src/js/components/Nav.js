import React, {Component} from "react";
import { Link,IndexLink } from "react-router";

export default class Nav extends Component {
    render(){
      return (
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">React Router Tutorial</a>
            </div>
            <ul class="nav navbar-nav">
              <li>
                <IndexLink to="/">Home</IndexLink>
              </li>
              <li>
                <Link to="/inbox">Inbox</Link>
              </li>
              <li>
                <Link to="/contact">Contacts</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
}
