import * as types from './types';

const host = 'https://andthetimeis.com';

export const fetchNewTime = ({ timezone = 'gmt', str='now'}) => ({
  type: types.FETCH_NEW_TIME,
  payload: new Date().toString(),
  meta: {
    type: 'api',
    url: host + '/' + timezone + '/' + str + '.json'
  }
});