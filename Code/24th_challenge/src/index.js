import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from 'store';

import GlobalStyle from 'styles/global';
import App from 'components/App';

import actions from './store/story/actions';

const renderApp = () => {

    const initialState = {};
    const store = configureStore(initialState);

    // A simple test of the story fetchStoryIds & fetchStories actions
    // Do not forget that fetchStoryIds call the fetchStories action in case of success.
    store.dispatch(actions.fetchStoryIds());

    ReactDOM.render(
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    , document.getElementById('hn-root'));
}

renderApp();
registerServiceWorker();
