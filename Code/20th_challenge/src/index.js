import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from 'store';

import GlobalStyle from 'styles/global';
import App from 'components/App'

const renderApp = () => {
    const initialState = {};
    const store = configureStore(initialState);

    // Init dispatch to create the store
    // check the console to see the output of redux logger
    store.dispatch({type: '@hnClone/@@INIT'});

    ReactDOM.render(
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    , document.getElementById('hn-root'));
}

renderApp();
registerServiceWorker();
