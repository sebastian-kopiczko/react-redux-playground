import React, { Component } from "react";

import AddPost from "../posts/Post/AddPost.jsx";
import Header from "../layout/Header/Header.jsx";
import PostList from "../posts/Post/PostList.jsx";

import { appTitle } from "../../constants/settings";

class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header title={appTitle} />
        </div>
        <div className="row">
          <div className="col">
            <AddPost />
          </div>
        </div>
        <div className="row">
          <PostList />
        </div>
      </div>
    );
  }
}
export default AppContainer;
