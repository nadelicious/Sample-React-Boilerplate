/*
 *
 * Login actions
 *
 */

import { EMAIL_CHANGED, PASSWORD_CHANGED } from './constants';

export function changeEmail(email) {
  return {
    type: EMAIL_CHANGED,
    email
  };
}

export function changePassword(password) {
  return {
    type: PASSWORD_CHANGED,
    password
  };
}
