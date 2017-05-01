import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = () => (state) => state.get('loginPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain(),
  (substate) => substate.toJS()
);

const makeSelectLogin = () => createSelector(
  selectLoginPageDomain(),
  (substate) => substate.toJS()
);

const makeSelectEmail = () => createSelector(
  selectLoginPageDomain(),
  (loginState) => loginState.get('email')
);

const makeSelectPassword = () => createSelector(
  selectLoginPageDomain(),
  (loginState) => loginState.get('password')
);


export default makeSelectLogin;
export {
  selectLoginPageDomain,
  makeSelectEmail,
  makeSelectPassword
};

