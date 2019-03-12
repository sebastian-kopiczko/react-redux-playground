import React, { Component } from "react";
import PostItem from "./PostItem/PostItem";

class PostList extends Component {
  render() {
    // const { posts } = this.state;
    return (
      <React.Fragment>
        <h2>Posts list</h2>
        <div className="mt-5">
          {/* {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))} */}
        </div>
      </React.Fragment>
    );
  }
}
export default PostList;
