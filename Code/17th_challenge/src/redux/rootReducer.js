import { combineReducers } from 'redux'

import {initialState as userInitialState, userReducer} from './userReducer';
import {initialState as postInitialState, postReducer} from './postReducer';


// Combine all the initial state into one root state
export const initialState = {
    user: userInitialState,
    post: postInitialState,
}

// Combine my reducer into one single root reducer
export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
});

export default rootReducer;