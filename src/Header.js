import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  // event handlers

  render() {
  	let title = "Bookmark Manager"
    let inlineStyle = {color: "red"};
    return(
      <div>
      	<h1 style={inlineStyle}>{title}</h1>
      </div>
    )
  }

}
