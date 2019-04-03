import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from 'store';

import GlobalStyle from 'styles/global';
import App from 'components/App';

const renderApp = () => {

    const initialState = {};
    const store = configureStore(initialState);

    ReactDOM.render(
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    , document.getElementById('hn-root'));
}

renderApp();
registerServiceWorker();
