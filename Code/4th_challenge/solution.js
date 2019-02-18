// represent the data
const posts = [
    {
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
        url: 'https://via.placeholder.com/600/771796',
    },
    {
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
        url: 'https://via.placeholder.com/600/d32776',
    },
    {
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
        url: 'https://via.placeholder.com/600/f66b97',
    },
    {
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
        url: 'https://via.placeholder.com/600/24f355',
    },
    {
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque',
        url: 'https://via.placeholder.com/600/92c952',
    }
];

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

const App = () => {

    return (
        <div>
            {
                posts.map(post => <Card post={post} />)
            }
        </div>
    );

}


ReactDOM.render(<App />, document.getElementById('root'));