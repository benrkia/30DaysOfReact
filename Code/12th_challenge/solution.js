class Post extends React.Component {

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

class AddPost extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
        }
    }

    handleChange = (event) => {
        const {id, value} = event.target;
        this.setState({
            [id]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const {title, body} = this.state;

        if(!title || !body){
            alert('make sure to fill the inputs');
            return;
        }

        this.props.addPost({title, body});
        this.setState({title:'', body:''});
    }
  
  
  render() {

    const {title, body} = this.state;
    
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
            <label for='title'>Title: </label>
            <input type='text' id='title' value={title} onChange={this.handleChange} />
        </div>
        <div>
            <label for='body'>Body: </label>
            <textarea type='text' id='body' value={body} onChange={this.handleChange} ></textarea>
        </div>
        <div>
            <input type='submit' value='submit' />
        </div>
      </form>
    );
  }
}

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      posts: [],
    }
  }

  addPost = (post) => {
    let posts = this.state.posts;
    const id = posts.length+1;

    posts.push({...post, id});

    this.setState({posts});
  }
  
  render() {

    const {posts} = this.state;
    
    return (
      <div>
        {posts.lenght !== 0 ? 
            (posts.map(post => <Post key={post.id} post={post} />))
            :
            (<h3 style={{color: 'red'}}>There is no posts yet!</h3>)
        }
        <AddPost addPost={this.addPost} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));