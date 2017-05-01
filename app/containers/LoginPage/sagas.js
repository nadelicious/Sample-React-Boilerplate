/**
 * Gets the user details from Firebase
 */

import { take, takeLatest, takeEvery, call, put, select, cancel } from 'redux-saga/effects';

// import App Action Creators from App/actions
import { userLoginSuccess, userLoginError } from 'containers/App/actions';

// import Selectors
import { makeSelectEmail, makeSelectPassword } from './selectors';

import { LOGIN_USER } from 'containers/App/constants';

import FireBaseTools from '../../utils/firebase'

import { push, LOCATION_CHANGE } from 'react-router-redux';

// login generator
export function* loginWithEmailAndPassword() {
	const email    = yield select(makeSelectEmail());
    const password = yield select(makeSelectPassword());

    try {
        const user = yield call(FireBaseTools.loginUser, {email, password})
        if (user.errorMessage) {
            yield put(userLoginError(user.errorMessage))
        } else {
            yield put(userLoginSuccess(user))
            yield put(push( '/dashboard' ))
        }
    } catch (error) {
        yield put(userLoginError(error))
    }
}

export function* loginUserData() {
  // Watches for LOGIN_USER actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOGIN_USER, loginWithEmailAndPassword);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [ loginUserData, ];


