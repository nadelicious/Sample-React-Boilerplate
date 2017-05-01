/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './constants';

const initialState = fromJS({
	email: '',
	password: ''
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      return state
      	.set('email', action.email);
 		case PASSWORD_CHANGED:
      return state
      	.set('password', action.password);
    default:
      return state;
  }
}

export default loginReducer;
