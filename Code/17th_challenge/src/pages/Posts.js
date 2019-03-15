import React from 'react';

import { connect } from 'react-redux';
import { deletePost } from '../redux/actionCreators';

import Post from '../components/Post';

const Posts = (props) => {

    const { posts, deletePost } = props;

    return (
        <div className='posts'>
            {posts.length === 0 ?
                <h1 className='centered-fill-header'>There are no posts</h1>
            :
                posts.map(post =>(
                    <Post 
                        key={post.id}
                        post={post}
                        deletePost={deletePost} />
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    posts: state.post.posts,
});

const mapDispatchToProps = dispatch => ({
    deletePost: (id) => dispatch(deletePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);