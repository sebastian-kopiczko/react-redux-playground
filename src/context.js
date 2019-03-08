import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        posts: state.posts.filter(
          posts => posts.id !== action.payload
        )
      };
    // case "ADD_CONTACT":
    //   return {
    //     ...state,
    //     posts: [ ...state, action.payload ]
    //   };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    posts: [],
    isLoaded: false,
    dispatch: action => this.setState(state => reducer(state, action))
  };

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
