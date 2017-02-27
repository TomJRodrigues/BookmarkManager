import React, { Component } from 'react';

export default class Resource extends Component {
  constructor(props) {
    super(props)

    // function binding
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(event) {
    event.preventDefault();
    console.log("working");
    this.props.deleteResourceHelper(this.props.index);
  }

  render() {
    return(
      <li>
        <a href={this.props.url}>
        {this.props.title}</a>
        <button onClick={this.handleDelete}>Delete Resource</button>
      </li>
    )
  }
}

      // <div>
      //   <h2>{this.props.items.subject}</h2>
      //   <ul>
      //     {this.props.items.resources.map((resource, index) => {
      //       return (
      //         <li>
      //           <a href={resource.url}>
      //           {resource.title}</a>
      //           <button onClick={this.handleDelete}>Delete Resource</button>
      //         </li>
      //       )}
      //     )}
      //   </ul>
      //   <form>
      //     <label htmlFor="title">
      //     Title to enter:
      //       <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange} size="30" />
      //     </label>
      //     <br/>
      //     <label htmlFor="url">
      //     URL to enter:
      //       <input type="text" name="url" id="url" value={this.state.url} onChange={this.handleInputChange} size="30" />
      //     </label>
      //     <br/>
      //     <button onClick={this.handleSubmit}>Add Resource</button>
      //   </form>
      // </div>