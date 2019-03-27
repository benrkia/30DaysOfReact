import React from 'react';

import { Link } from 'react-router-dom';

import { Header, Spacer, NavSection, NavItem, Content } from './styles';

const Nav = () => (
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
                        <Link to="login">Login</Link>
                    </NavItem>
                </NavSection>
            </Content>
        </Header>
        <Spacer />
    </div>
);

export default Nav;
