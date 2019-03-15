import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav>
        <div className='container'>
            <ul>
                <li>
                    <NavLink exact to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/users'>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/posts'>Posts</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;