import * as types from './types';

import { Posts } from '../data/data';

export const initialState = {
    posts: Posts,
}

export const postReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.DELETE_POST:
            const posts = state.posts.filter(post => post.id !== action.payload);
            return {...state, posts};
        default:
            return state;
    }
}

export default postReducer;