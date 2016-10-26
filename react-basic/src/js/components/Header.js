import React, { Component } from "react";

export default class Header extends Component {
  constructor () {
    super();

    this.state = {
      title: "Welcome"
    }
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({title: value});
  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <input type="text" value={this.state.title} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}
