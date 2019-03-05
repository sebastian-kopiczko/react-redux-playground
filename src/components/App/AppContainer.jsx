import React, { Component } from 'react'
import './styles/AppContainer.css'
import List from '../List/List.jsx'

class AppContainer extends Component {
  render() {
    return (
      <div className="app__container">
      app container
      <List /> 
      </div>
    )
  }
}
export default AppContainer
