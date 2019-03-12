import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getPosts } from "../../../actions/postActions";

import PostItem from "./PostItem";

class PostList extends Component {

  compontentDidMount(){
    this.props.getPosts(); //put posts into the props
  }

  render() {
    const { posts } = this.props;
    return (
      <React.Fragment>
        <h2>Posts list</h2>
        <div className="mt-5">
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  posts: state.post.posts // post from rootReducer, able to use this.props.posts
});

// const mapDispatchToProps = dispatch => ({
//   getPosts: () => dispatch({ type: GET_POSTS })
// });

export default connect(
  mapStateToProps, 
  // mapDispatchToProps
  { getPosts }  
)(PostList); //connect component with redux state
//connect(anything to map from redux state to props in component, what actions to dispatch)
