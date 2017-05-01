/**
*
* LoginForm
*
*/

import React from 'react';
import {
	Form,
	FormGroup,
	Input,
	Label,
	Button
} from 'reactstrap';

import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {ToastContainer,ToastMessage} from 'react-toastr';

const ToastMessageFactory = React.createFactory(ReactToastr.ToastMessage.animation);

const LoginWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
`;

function LoginForm(props) {

  return (
    <LoginWrapper>
      <Form autoComplete="off" onSubmit={props.onSubmitForm}>
        <FormGroup>
          <Label for="labelEmail">
          	<FormattedMessage {...messages.email}/>
          </Label>
          <Input type="email" name="email" id="labelEmail" placeholder="Email" autoComplete="off" onChange={props.onChangeEmail}/>
        </FormGroup>
        <FormGroup>
          <Label for="labelPassword">
          	<FormattedMessage {...messages.password}/>
          </Label>
          <Input type="password" name="password" id="labelPassword" placeholder="Password" autoComplete="off" onChange={props.onChangePassword}/>
        </FormGroup>
        <Button color="primary" disabled={props.loading}>Submit</Button>
      </Form>
    </LoginWrapper>
  );
}

LoginForm.propTypes = {

};

export default LoginForm;
