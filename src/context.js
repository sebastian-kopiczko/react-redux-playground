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
    case "ADD_CONTACT":
      return {
        ...state,
        posts: [ action.payload, ...state.posts ]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    posts: [
      {
        title: 'title 1',
        body: 'body 1',
        id: 'id-0'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
