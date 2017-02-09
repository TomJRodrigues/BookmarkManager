import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfClicks: 0
    }
  }

  // event handlers

  onIncreaseCount() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    return(
      <div>
      	<h2 onClick={() => this.onIncreaseCount()}>{this.props.items.subject}</h2> 
        Number of clicks: {this.state.numberOfClicks}


      	<ul>
      		{this.props.items.resources.map((resource) => {
      			return(
      				<li>
      					<a href={resource.url}>{resource.title}</a>
      				</li>
      			)}
					)}
      	</ul>
      </div>
    )
  }
  
}
