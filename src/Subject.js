import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      newResourceTitle: "Awesome React Tutorial",
      newResourceUrl: "http://",
      hasBeenRead: false,
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div>
      	<h2>{this.props.items.subject}</h2> 
      	<ul>
      		{this.props.items.resources.map((resource, idx) => {
      			return(
      				<li key={idx}>
      					<a href={resource.url}>{resource.title}</a>
      				</li>
      			)}
					)}
      	</ul>
        <form onSubmit={this.props.handleSubmit}>
          <label>
          Title to enter:
            <input type="text" name="newResourceTitle" value={this.state.newResourceTitle} onChange={this.handleInputChange} size="30" />
          </label>
          <br/>
          <label>
          URL to enter:
            <input type="text" name="newResourceUrl" value={this.state.newResourceUrl} onChange={this.handleInputChange} size="30" />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
  
}
