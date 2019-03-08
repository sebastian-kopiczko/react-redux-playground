import React, { Component } from "react";
import PostItem from "./PostItem/PostItem";
import { Consumer } from '../../context';

class PostList extends Component {
  deletePost = id => {
    const { posts } = this.state;
    // wyfiltruj post z id do usuniecia
    const newPosts = posts.filter(post => post.id !== id);
    this.setState({
      posts: newPosts
    })
  };

  render() {
    return (
      <Consumer>
        { value => {
          const { posts, isLoaded } = value;
          if (!isLoaded) {
            return <div>Fetching data...</div>;
          }
          return (
          <div className="mt-5">
            {posts.map(post => (
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            ))}
          </div>
          )
        }}
      </Consumer>
    )
  }
}
export default PostList;
