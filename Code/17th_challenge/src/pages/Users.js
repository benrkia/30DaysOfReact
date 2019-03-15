import React from 'react';

import { connect } from 'react-redux';
import { deleteUser } from '../redux/actionCreators';

import User from '../components/User';

const Users = (props) => {

    const { users, deleteUser } = props;

    return (
        <div className='users'>
            {users.length === 0 ?
                <h1 className='centered-fill-header'>There are no users</h1>
            :
                users.map(user =>(
                    <User 
                        key={user.id}
                        user={user}
                        deleteUser={deleteUser} />
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
    deleteUser: (id) => dispatch(deleteUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);