import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Header, NavSection, NavItem, Content, Spacer } from './styles';

class Nav extends Component {

    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    logout = async () => {
      this.props.auth.logout('/');
    };

    render(){

        const { authenticated } = this.state;

        if (authenticated === null) return null;

        const authenticationControl = authenticated ? (
            <button onClick={this.logout}>
                Logout
            </button>
        )
        :
        (
            <Link to="login">Login</Link>
        );

        return (
            <div>
                <Header>
                    <Content>
                        <NavSection>
                            <NavItem>
                                <Link to='/'>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="news">News</Link>
                            </NavItem>
                            <NavItem>
                                {authenticationControl}
                            </NavItem>
                        </NavSection>
                    </Content>
                </Header>
                <Spacer />
            </div>
        );
    }
}

export default Nav;
