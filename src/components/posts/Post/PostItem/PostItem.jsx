import React, { Component } from "react";
import PropTypes from "prop-types";

class PostItem extends Component {
  state = {
    showPostBody: true
  };

  onDeleteClick = id => {
    // delete post
  };

  render() {
    const { id, title, body } = this.props.post;
    const { showPostBody } = this.state;

    return (
      <div className="post">
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => this.onDeleteClick(id)}
        >
          Delete post
        </button>

        <h2
          className="post__title"
          onClick={() => this.setState({ showPostBody: !showPostBody })}
        >
          {title}, {id}
        </h2>
        {showPostBody ? <p>{body}</p> : null}
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
