import React, { Component } from 'react'

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      id: null
    }
  }
  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    console.log('submitted')
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail">Email address</label>
            <input 
              name="title" 
              type="text" 
              className="form-control" 
              id="exampleInputEmail" 
              aria-describedby="emailHelp" 
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <span>{this.state.email}</span>
          </div>
          <div className="form-check">
            <input 
              name="isSelected"
              type="checkbox" 
              className="form-check-input" 
              id="exampleCheck" 
              checked={this.state.isSelected}
              onChange={this.handleInputChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck">Check me out</label>
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

export default Form