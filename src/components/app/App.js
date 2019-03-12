import React, { Component } from "react";

import AppContainer from "./AppContainer";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "../../context";

class App extends Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
