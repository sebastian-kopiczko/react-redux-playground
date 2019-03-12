import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "../../store";

import AppContainer from "./AppContainer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
