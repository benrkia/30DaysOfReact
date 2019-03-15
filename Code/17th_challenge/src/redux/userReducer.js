import * as types from './types';

import { Users } from '../data/data';

export const initialState = {
    users: Users,
}

export const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.DELETE_USER:
            const users = state.users.filter(user => user.id !== action.payload);
            return {...state, users};
        default:
            return state;
    }
}

export default userReducer;