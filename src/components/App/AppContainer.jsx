import React, { Component } from "react";
import "./styles/AppContainer.css";
import Header from "../Header/Header.jsx";
import PostList from "../Post/PostList.jsx";
import Form from "../Form/Form";
import { appTitle } from "../../constants/settings";

class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header appTitle={appTitle} />
        </div>
        <div className="row">
          <div className="col">
            <h3>Posts list</h3>
            <PostList />
          </div>
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
export default AppContainer;
