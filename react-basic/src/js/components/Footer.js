import React, { Component } from "react";

export default class Footer extends Component {

  render () {
    return (
      <h3>(c)2016 copyright {this.props.company}</h3>
    );
  }
}
