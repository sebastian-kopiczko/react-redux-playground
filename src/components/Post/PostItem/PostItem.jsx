import React, { Component } from 'react'

class PostItem extends Component  {
  constructor(props){
    super(props);
    this.state = {
      showPostBody: true
    }
  }
  render(){
    const { id, title, body } = this.props;
    return (
        <div key={id} className="post">
          <h2 className="post__title"
              onClick={()=>this.setState({showPostBody: !this.state.showPostBody})}
          >{title}</h2>
          {this.state.showPostBody ? <p>{body}</p>: null}
        </div>
    )

  }
}
export default PostItem