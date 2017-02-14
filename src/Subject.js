import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      numberOfClicks: 0,
      value: "URL"
    }
  }

  // event handlers

  handleClick() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    let numberOfResources = this.props.items.resources.length
    this.props.items.resources[numberOfResources] = {
      title: this.state.value,
      url: "httpwaht"
    }
    console.log(this.props.items.resources[0].title)
    console.log(numberOfResources)
  }

  render() {
    return(
      <div>
      	<h2 onClick={() => this.handleClick()}>{this.props.items.subject}</h2> 
        Number of clicks: {this.state.numberOfClicks}
        <hr/>
        <form>
          <label>
          URL to enter:
            <input type="text" name="URL" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
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
