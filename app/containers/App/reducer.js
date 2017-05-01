/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  uid: null,
  isLoggedIn: false,
  userData: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return state
        .set('loading', true)
    case LOGIN_USER_SUCCESS:
      return state
        .setIn('userData', action.user)
        .set('loading', false)
        .set('isLoggedIn', true)
        .set('uid', action.user.uid)
    case  LOGIN_USER_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
