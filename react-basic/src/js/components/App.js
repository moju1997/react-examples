import React, { Component } from "react";

import Header from './Header';
import Footer from './Footer';

export default class App extends Component {

  render () {
    return (
      <div>
        <Header />

        <section>
          <h1> This the main Content.</h1>
        </section>

        <Footer company="Hewlett Packard Enterprise" />
      </div>
    );
  }
}
