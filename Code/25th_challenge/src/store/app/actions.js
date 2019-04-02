import { buildActionCreator } from 'store/utils'

// this will be the namespace of this feature
// this will help us groupe functionalities by feature
// instead of having a single file for all the features
const NS = '@hnClone/app';

export const actionTypes = {
    SET_THEME: `${NS}/SET_THEME`,
};

const actions = {
    setTheme: buildActionCreator(actionTypes.SET_THEME),
};

export default actions;