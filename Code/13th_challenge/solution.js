const CardHead = (props) => {
  const {title} = props;

  return (
    <div className="card-head">
      <h3>{title}</h3>
    </div>
  );
}

const CardBody = (props) => {
  const {url, body} = props;

  return (
    <div className="card-body">
      <img src={url} />
      <p>{body}</p>
    </div>
  );
}

const Card = (props) => {
  const {title, url, body} = props.post;

  return (
    <div className="card">
      <CardHead title={title} />
      <CardBody url={url} body={body} />
    </div>
  );
}

Card.defaultProps = {
  post: {title:'title', body:'this is body'}
}

class Posts extends React.PureComponent {
  
  constructor(props) {
    super(props);
    
    this.getPostsApiUrl = this.getPostsApiUrl.bind(this);
    this.getPosts = this.getPosts.bind(this);
    
    this.state = {
      posts: [],
      is_loading: true,
    }
  }
  
  getPostsApiUrl() {
    return 'https://jsonplaceholder.typicode.com/photos';
  }
  
  getPosts() {
    const URL = this.getPostsApiUrl();
    fetch(URL)
      .then(reponse => reponse.json())
      .then(posts => {
        const _20Posts = posts.slice(0, 20);
        const mappedPosts = _20Posts.map(post => ({
          id: post.id,
          title: post.title,
          body: `${post.title} ${post.thumbnailUrl}`,
          url: post.url,
        }));
      
        this.setState({
          posts: mappedPosts,
          is_loading: false,
        });
        
      });
  }
  
  componentDidMount() {
    this.getPosts();
  }
  
  
  render() {
    
    const {posts, is_loading} = this.state;
    
    return (
      <div>
        {is_loading ?
          (<h3>loading...</h3>)
          :
          (posts.map(post => <Card  key={post.id} post={post} />))
        }
      </div>
    );
  }
}

const App = () => {

  return (
    <Posts />
  );

}


ReactDOM.render(<App />, document.getElementById('root'));