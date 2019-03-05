import React, { Component } from 'react'
import './styles/AppContainer.css'
import PostList from '../Post/PostList.jsx'
import Form from '../Form/Form'
class AppContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row"><h1>react-redux</h1></div>
        <div className="row">
          <div className="col"><h3>Posts list</h3>
            <PostList />
          </div>
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
    )
  }
}
export default AppContainer
