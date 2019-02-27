import React, { Component } from 'react';

class Post extends Component {

    constructor(props){
      super(props);
  
      this.state = {
        active: false,
      }
    }
  
    toggleBody = () => {
      this.setState((state) => ({
        active: !state.active
      }));
    }
  
    render() {
  
      const {post} = this.props;
      const {active} = this.state;
  
      return(
        <div>
          <h4
            className={'title' + (active ? ' active' : '')}
            onClick={this.toggleBody}>{post.title}</h4>
          {active &&
              <p className='body'>{post.body}</p>
          }
        </div>
      );
    }
}

export default Post;