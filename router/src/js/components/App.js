import React, {Component} from "react";

import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

export default class App extends Component {
    render(){
      return (
        <div>
          <Nav />

          <div className="container">
              {this.props.children}
          </div>

          <Footer />
        </div>
      );
    }
}
