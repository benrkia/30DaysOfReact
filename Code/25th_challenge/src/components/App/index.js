import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Nav from 'components/Nav';
import News from 'components/News';
import Home from 'components/Home';
import Login from 'components/Login';

import { colorsDark } from 'styles/palette';
import { Wrapper } from './styles';

import { onAuthRequired } from 'utils';

const App =  () => (

    <Router>
        <Security
            issuer='https://dev-759837.okta.com/oauth2/default'
            client_id='0oaegj0upsk6PkWtQ356'
            redirect_uri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired}
        >
            <ThemeProvider theme={colorsDark}>
                <div>
                    <Nav />
                    <Wrapper>
                        <Switch>
                            <SecureRoute path="/news" component={News} />
                            <Route 
                                path='/login' 
                                render={() => (
                                    <Login baseUrl='https://dev-759837.okta.com' />
                                )}
                            />

                            {/* the bellow route will be used by octa in order to complete the authentication */}
                            <Route path='/implicit/callback' component={ImplicitCallback} />
                            
                            <Route component={Home} />
                        </Switch>
                    </Wrapper>
                </div>
            </ThemeProvider>
        </Security>
    </Router>

);

export default App;