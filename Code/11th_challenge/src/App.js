import React, { Component } from 'react';

import Post from './components/Post'

import './style/Post.css';

import posts from './data/posts'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts,
    }
  }

  asc = () => {
    let {posts} = this.state;
    
    posts.sort((a, b) => {
      if(a.title > b.title)
        return 1;
      
      if(a.title < b.title)
        return -1;
      
      return 0;
    });
    
    this.setState({posts});
  }
  
  desc = () => {
    let {posts} = this.state;
    
    posts.sort((a, b) => {
      if(a.title < b.title)
        return 1;
      
      if(a.title > b.title)
        return -1;
      
      return 0;
    });
    
    this.setState({posts});
  }
  
  render() {

    const {posts} = this.state;
    
    return (
      <div>
        {
          posts.map(post => <Post key={post.id} post={post} />)
        }

        <button onClick={this.desc}>sort desc</button>
        <button onClick={this.asc}>sort asc</button>
      </div>
    );
  }
}

export default App;
