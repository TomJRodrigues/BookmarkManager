import React, { Component } from 'react';

class AddSubject extends Component {
	constructor(props) {
		super(props);

		this.state = {
			subject: 'New Subject',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	// addNewSubject(event) {
	// 	console.log(this.props.items);
 //    event.preventDefault();
 //    const tempState = this.state;
 //    const newSubject = {
 //      subject: this.state.subject,
 //      resources: [],
 //    }
 //    tempState.resources.push(newSubject);
 //    this.setState(tempState);
	// 	setTimeout(function() {
	// 		console.log(this.state);
	// 	}, 500);
 //  }

  handleSubmit(event) {         // packages event input into object notation, calls bound function from app.js
    event.preventDefault();
    const newSubject = {
      subject: this.state.subject,
      resources: []
    }
    this.props.addNewSubject(newSubject);
  }

  handleInputChange(event) {
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

	render() {
		return (
			<div>
			  <form htmlFor="subjectButton">
          <input 
            id="subjectButton" 
            type="text" name="subject" 
            onChange={this.handleInputChange} 
            value={this.state.subject} 
          />
          <button onClick={this.handleSubmit}>New Subject</button>
        </form> 
			</div>
		);
	}
}

export default AddSubject;