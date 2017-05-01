
import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectUserData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('userData')
);

const makeSelectUserId = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('uid')
);

const makeSelectIsLoggedIn = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isLoggedIn')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};


export {
  selectGlobal,
  makeSelectLocationState,
  makeSelectUserData,
  makeSelectUserId,
  makeSelectIsLoggedIn,
  makeSelectLoading,
  makeSelectError,
};
