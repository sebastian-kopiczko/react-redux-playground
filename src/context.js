import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = { posts: [], isLoaded: false };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json => {
        this.setState({
          posts: json,
          isLoaded: true
        });
      });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;