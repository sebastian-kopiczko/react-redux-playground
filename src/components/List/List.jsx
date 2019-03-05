import React, { Component } from 'react'
import ListItem from './ListItem/ListItem';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res =>res.json())
      .then(json => {
        this.setState({
          posts: json,
          isLoaded: true
        })
      })
  }

  render() {
    const { posts, isLoaded } = this.state; 
    if(!isLoaded){
      return <div>Fetching data...</div>
    } 
    return (
        <ul>
          { posts.map(post => ( <ListItem key={post.id} title={post.title} body={post.body}/>)) }
        </ul>
    )
  }
}
export default List