import { combineReducers } from 'redux';

import app from './app/reducer';

// The name of each reducer will be the key
const rootReducer = combineReducers({
    app,
});

export default rootReducer;