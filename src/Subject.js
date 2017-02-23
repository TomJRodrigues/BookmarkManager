import React, { Component } from 'react';

export default class Subject extends Component {
  constructor(props) {
    super(props)


    // function binding
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

    this.state = {
      title: "Awesome React Tutorial",
      url: "http://",
      read: false,
    }
  }

  // functions

  handleSubmit(event) {         // packages event input into object notation, calls bound function from app.js
    event.preventDefault();
    const newResource = {
      title: this.state.title,
      url: this.state.url,
    }
    this.props.addResource(this.props.index, newResource);
  }

  handleInputChange(event) {    // allows typing in input fields and checking boxes
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleCheck(event) {
    const checkStatus = {
      read: !this.props.items.resources[0].read,
    };
    this.props.changeCheckStatus(this.props.index, checkStatus);
  }

  render() {
    return(
      <div>
      	<h2>{this.props.items.subject}</h2> 
      	<ul>
          {console.log(this.props)}
      		{this.props.items.resources.map((resource, index) => {
      			return(
      				<li>
      					Read?:<input 
                        type="checkbox" 
                        name="read" 
                        index={index} 
                        checked={this.props.items.resources[index].read} 
                        onChange={this.props.handleInputChange} 
                        /><a href={resource.url}>{resource.title}</a>
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
