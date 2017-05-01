/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

// global selectors
import { makeSelectLoading, makeSelectError } from '../App/selectors';

import { makeSelectEmail, makeSelectPassword } from './selectors';

import LoginForm from 'components/LoginForm';

//import action creators
import { changeEmail, changePassword } from './actions';

// import global actions
import { loginUser } from '../App/actions';


export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading, error } = this.props;

    return (
      <div>
        <LoginForm {...this.props}/>
      </div>
    );
  }
}

LoginPage.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
        evt.preventDefault();
        dispatch(loginUser());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
