import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Home, Users, Posts, NotFound } from '../pages';
import Nav from '../layouts/Nav';

const App = () => (
    <Router>
        <React.Fragment>
            <Nav />
            <div className='container'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/users" component={Users} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </React.Fragment>
    </Router>
);

export default App;