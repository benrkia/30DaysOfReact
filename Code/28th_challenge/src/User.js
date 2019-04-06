import React from 'react';

const User = ({ user }) => {

    const userDivStyle = {
        backgroundColor: '#607D8B',
        padding: '5px 10px',
    }

    const margin5 = {
        margin: '5px 0',
    }

    return (
        <div style={Object.assign({}, userDivStyle, margin5)}>
            <h4 style={margin5}>{user.name}</h4>
            <p style={margin5}>{user.email}</p>
        </div>
    );
}

export default User;