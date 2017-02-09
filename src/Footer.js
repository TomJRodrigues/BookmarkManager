import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props)
  }

  // event handlers

  render() {
  	let madeBy = "Made by Tom Rodrigues"
    let email = "tomjrodrigues@gmail.com"
    let github = "TomJRodrigues"
    return(
      <div>
      	<h5>{madeBy}</h5>
        <h6>{email}</h6>
        <h6>{github}</h6>
      </div>
    )
  }

}
