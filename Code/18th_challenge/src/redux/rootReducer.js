import { combineReducers } from 'redux';

import * as currentTime from './currentTime';

export const rootReducer = combineReducers({
  currentTime: currentTime.reducer,
})

export const initialState = {
  currentTime: currentTime.initialState,
}

export default rootReducer