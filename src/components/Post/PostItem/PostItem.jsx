import React, { Component } from "react";
import { Consumer } from "../../../context";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostBody: true
    };
  }

  onDeleteClick = () => {};

  render() {
    const { id, title, body } = this.props;
    const { showPostBody } = this.state;

    return (
      <Consumer>
        { value => {
          return (
            <div key={id} className="post">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={this.onDeleteClick}
              >
                Delete post
              </button>

              <h2
                className="post__title"
                onClick={() => this.setState({ showPostBody: !showPostBody })}
              >
                {title}
              </h2>
              {showPostBody ? <p>{body}</p> : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// todo PropTypes

export default PostItem;
