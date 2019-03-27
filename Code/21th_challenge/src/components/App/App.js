import React, { Component } from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Nav from 'components/Nav';
import News from 'components/News';
import Home from 'components/Home';
import Login from 'components/Login';

import { colorsDark } from 'styles/palette';
import { Wrapper } from './styles';

class App extends Component {

    render() {

        return (
            <Router>
                <ThemeProvider theme={colorsDark}>
                    <div>
                        <Nav />
                        <Wrapper>
                            <Switch>
                                <Route path="/news" component={News} />
                                <Route path="/login" component={Login} />
                                <Route component={Home} />
                            </Switch>
                        </Wrapper>
                    </div>
                </ThemeProvider>
            </Router>
        );
    }
}

export default App;