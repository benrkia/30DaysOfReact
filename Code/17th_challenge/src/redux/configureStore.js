import { createStore } from 'redux'

import { initialState, rootReducer } from './rootReducer'

const configureStore = () => {

    const store = createStore(
        rootReducer,
        initialState,
    );

    return store;

}

export default configureStore;