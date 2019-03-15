import * as types from './types';

const deleteUser = (id) => ({
    type: types.DELETE_USER,
    payload: id,
});

const deletePost = (id) => ({
    type: types.DELETE_POST,
    payload: id,
});

export {
    deletePost,
    deleteUser,
}