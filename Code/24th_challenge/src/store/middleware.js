import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const isProd = process.env.NODE_ENV === 'production';

const middlewares = [];
middlewares.push(thunk);

// If it is not production we'll push our createLogger middleware
// which is a log utility for the chrome console
if(!isProd) {
    middlewares.push(createLogger());
}

// we can get rid of compose for now
// but it's important to compose all the app's middleware into a single one
const middleware = compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default middleware;