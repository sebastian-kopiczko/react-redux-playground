import React, { Component } from "react";

import AddPost from "../posts/Post/AddPost.jsx"
import Header from "../layout/Header/Header.jsx";
import PostList from "../posts/Post/PostList.jsx";
import Form from "../Form/Form";

import { appTitle } from "../../constants/settings";
import "./styles/AppContainer.css";


class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header appTitle={appTitle} />
        </div>
        <div className="row">
          {/* <div className="col">
            <h3>Posts list</h3>
            <PostList />
          </div> */}
          <div className="col">
            <AddPost />
          </div>
          {/* <div className="col">
            <Form />
          </div> */}
        </div>
        <div className="row">
          <PostList />
        </div>
      </div>
    );
  }
}
export default AppContainer;
