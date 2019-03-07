import React, { Component } from "react";
import { postInitState } from "../../constants/settings";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = postInitState;
  }

  setInitialState = () => {
    this.setState(postInitState);
  };// ustawia pusty stan

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    ); //wyswietla biezacy stan a nie poprzedni
  };

  handleSubmit = e => {
    e.preventDefault();
    const newPost = Object.assign({}, this.state); // nowy obiekt z obecnego stanu
    this.setInitialState();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="postTitle">Post title</label>
            <input
              name="postTitle"
              type="text"
              className="form-control"
              id="postTitle"
              value={this.state.postTitle}
              onChange={this.handleInputChange}
            />
            <span>{this.state.postTitle}</span>
          </div>
          <div className="form-group">
            <label htmlFor="postBody">Post body</label>
            <input
              name="postBody"
              type="text"
              className="form-control"
              id="postBody"
              value={this.state.postBody}
              onChange={this.handleInputChange}
            />
            <span>{this.state.postBody}</span>
          </div>
          <div className="form-group">
            <label htmlFor="userId">Select userId</label>
            <select
              name="userId"
              className="form-control"
              id="userId"
              value={this.state.userId}
              onChange={this.handleInputChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default Form;
