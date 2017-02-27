import React, { Component } from 'react';
import Resource from './Resource.js';

export default class Subject extends Component {
  constructor(props) {
    super(props)

    // function binding
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteResourceHelper = this.deleteResourceHelper.bind(this);

    this.state = {
      title: "Awesome React Tutorial",
      url: "http://",
      read: false,
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

  handleInputChange(event) {    // allows typing in input fields and checking boxes
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  deleteResourceHelper(resourceIndex) {  // passes resourceIndex and subjectIndex up to parent
    this.props.deleteResource(resourceIndex, this.props.index);
  }

  render() {
    return(
      <div>
      	<h2>{this.props.items.subject}</h2>
        <ul>
          {this.props.items.resources.map((resource, index) => {
            return (
              <Resource
                index={index}
                deleteResourceHelper={this.deleteResourceHelper}
                items={this.items}
                title={resource.title}
                url={resource.url}
              />
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