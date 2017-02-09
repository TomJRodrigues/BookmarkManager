import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  // event handlers

  render() {
    let inlineStyle = {display: "inline-block"}
    return(
      <span className="navbar" style={inlineStyle}>
        <h6><a href="#">{this.props.items.subject}</a></h6>
      </span>
    )
  }

}