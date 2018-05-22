import React, { Component } from 'react';

export default class Resource extends Component {
  constructor(props) {
    super(props)

    // function binding
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteResourceHelper(this.props.index);
  }

  render() {
    return(
      <li>
        <a href={this.props.url}>
        {this.props.title}</a>
        <button className="btn btn-sm btn-danger" onClick={this.handleDelete}>Delete</button>
      </li>
    )
  }
}