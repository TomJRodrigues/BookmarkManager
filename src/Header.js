import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  // event handlers

  render() {
  	let title = "React Class Bookmark Manager"
    return(
      <div>
      	<h1>{title}</h1>
        <h6><a href="https://github.com/TomJRodrigues">Developed by Tom Rodrigues</a></h6>
      </div>
    )
  }

}
