import { combineReducers } from 'redux';

import app from './app/reducer';
import story from './story/reducer';

// The name of each reducer will be the key
const rootReducer = combineReducers({
    app,
    story,
});

export default rootReducer;