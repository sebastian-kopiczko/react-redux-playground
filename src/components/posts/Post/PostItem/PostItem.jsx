import React, { Component } from "react";
import { Consumer } from "../../../../context";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPostBody: true
    };
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  };

  // onAddClick = dispatch => dispatch({type: 'ADD_POST', payload: })

  render() {
    const { id, title, body } = this.props;
    const { showPostBody } = this.state;

    return (
      <Consumer>
        { value => {
          const { dispatch } = value;
          return (
            <div className="post">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

// todo PropTypes

export default PostItem;
