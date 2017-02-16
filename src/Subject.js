import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)


    // function binding
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: "Awesome React Tutorial",
      url: "http://",
    }
  }

  handleSubmit(event) {         // packages event input into object notation, calls bound function from app.js
    event.preventDefault();
    const newResource = {
      title: this.state.title,
      url: this.state.url,
    }
    this.props.addResource(this.props.index, newResource);
  }

  handleInputChange(event) {    // allows typing in input fields
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <div>
      	<h2>{this.props.items.subject}</h2> 
      	<ul>
      		{this.props.items.resources.map((resource) => {
      			return(
      				<li>
      					<a href={resource.url}>{resource.title}</a>
      				</li>
      			)}
					)}
      	</ul>
        <form>
          <label htmlFor="title">
          Title to enter:
            <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange} size="30" />
          </label>
          <br/>
          <label htmlFor="url">
          URL to enter:
            <input type="text" name="url" id="url" value={this.state.url} onChange={this.handleInputChange} size="30" />
          </label>
          <br/>
          <button onClick={this.handleSubmit}>Add Resource</button>
        </form>
      </div>
    )
  }
  
}
