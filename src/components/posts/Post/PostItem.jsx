import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from 'react-redux'
import { deletePost } from "../../../actions/postActions";


class PostItem extends Component {
  state = {
    showPostBody: true
  };

  onDeleteClick = id => {
    this.props.deletePost(id);
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
          {title}, id: {id}
        </h2>
        {showPostBody ? <p>{body}</p> : null}
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default connect(null, { deletePost })(PostItem); //no mapStateToProps