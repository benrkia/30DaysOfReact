import { createStore, applyMiddleware } from 'redux';
import { rootReducer, initialState } from './rootReducer'

import apiMiddleware from './apiMiddleware';
import testMiddleware from './testMiddleware';

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      apiMiddleware,
      testMiddleware,
    )
  );

  return store;
}

export default configureStore;