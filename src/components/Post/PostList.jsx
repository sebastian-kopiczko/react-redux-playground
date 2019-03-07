import React, { Component } from "react";
import PostItem from "./PostItem/PostItem";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json => {
        this.setState({
          posts: json,
          isLoaded: true
        });
      });
  }

  render() {
    const { posts, isLoaded } = this.state;
    // setTimeout(() => console.table(posts), 1500);
    if (!isLoaded) {
      return <div>Fetching data...</div>;
    }
    return (
      <div className="mt-5">
        {posts.map(post => (
          <PostItem key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}
export default PostList;
