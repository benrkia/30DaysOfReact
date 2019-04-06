import React from 'react';

import User from './User';

class Users extends React.Component {

    state = {
        users: [],
        isLoading: false,
        source: ''
    }

    componentDidMount() {
		const users = this.props.load('users');

        // We check if we have the users in the localStorage First
        if(!users && !this.state.isLoading) {
            this.fetchData();
        } else {
            this.setState({ users, source: 'Local Storage' });
        }
    }

    fetchData() {
        this.setState({ isLoading: true });

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(fetchedUsers => {
            const users = fetchedUsers.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
            }));

            this.props.save('users', users);

            this.setState({
                users,
                isLoading: false,
                source: 'API'
            });
        });
    }

    render() {

        const { users, isLoading, source } = this.state;
        
        return (
            <div>
                {isLoading ? 
                    <h1>Loading...</h1>
                :
                    <React.Fragment>
                        <h1>Source: {source}</h1>
                        {
                            users.map(user => <User key={user.id} user={user} />)
                        }
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Users;