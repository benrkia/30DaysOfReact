import React from 'react';

class Post extends React.Component {

    constructor(props) {
        super(props);

        this.toggleBody = this.toggleBody.bind(this);
        this.deleteCurrentPost = this.deleteCurrentPost.bind(this);

        this.state = {
            active: false,
        }
    }

    toggleBody() {
        this.setState({active: !this.state.active});
    }

    deleteCurrentPost() {
        const confirmation = window.confirm('Are you really want to delete this post');
        if(confirmation) {
            const { id } = this.props.post;
            this.props.deletePost(id);
        }
    }

    render() {
        const { post } = this.props;
        const { active } = this.state;

        return (
            <div className='post'>
                <h4
                    className={'title' + (active ? ' active' : '')}
                    onClick={this.toggleBody}>{post.title}</h4>
                {active &&
                    <div className='body'>
                        <p>{post.body}</p>
                        <button className='delete-post' onClick={this.deleteCurrentPost}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                }
            </div>
        );
    }
}

export default Post;