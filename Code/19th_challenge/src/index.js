import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import GlobalStyle from 'styles/global';
import App from 'components/App'

const renderApp = () => {

    ReactDOM.render(
        <React.Fragment>
            <GlobalStyle />
            <App />
        </React.Fragment>
    , document.getElementById('hn-root'));
}

renderApp();
registerServiceWorker();
