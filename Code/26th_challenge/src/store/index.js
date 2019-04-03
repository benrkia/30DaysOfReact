import { createStore } from 'redux';

import reducer from './reducer';
import middleware from './middleware';

// we can have initialState from many places (api call...)
// so it's good to have it as an argument of the configure store function
const configureStore = initialState => {
    const store = createStore(reducer, initialState, middleware);

    return store;
}

export default configureStore;