import React from 'react';

const User = (props) => {

    const { user, deleteUser } = props;

    const deleteCurrentUser = () => {
        const confirmation = window.confirm('Do you really want to delete this user ?');
        if(confirmation) {
            deleteUser(user.id);
        }
    }

    return (
        <div className='user'>
            <div className='header'>
                <h3 className='username'>{user.username}</h3>
                <span onClick={deleteCurrentUser}>
                    <i className="fas fa-trash-alt"></i>
                </span>
            </div>
            <div className='user-info'>
                <div>
                    <i className="fas fa-user"></i>
                    <span>{user.name}</span>
                </div>
                <div>
                    <i className="fas fa-envelope"></i>
                    <span>{user.email}</span>
                </div>
                <div>
                    <i className="fas fa-phone"></i>
                    <span>{user.phone}</span>
                </div>
                <div>
                    <i className="fas fa-link"></i>
                    <span>
                        <a href={`http://${user.website}`} rel="noopener noreferrer" target="_blank">
                            {user.website}
                        </a>
                    </span>
                </div>
            </div>            
        </div>
    );
}

export default User;