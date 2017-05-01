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

const RegisterWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
`;

function RegisterForm() {
  return (
    <RegisterWrapper>
      <Form>
        <FormGroup>
          <Label for="labelEmail">
          	<FormattedMessage {...messages.email}/>
          </Label>
          <Input type="email" name="email" id="labelEmail" placeholder="Email" autoComplete="off"/>
        </FormGroup>
        <FormGroup>
          <Label for="labelPassword">
          	<FormattedMessage {...messages.password}/>
          </Label>
          <Input type="password" name="password" id="labelPassword" placeholder="Password" autoComplete="off"/>
        </FormGroup>
        <FormGroup>
          <Label for="labelRePassword">
          	<FormattedMessage {...messages.repassword}/>
          </Label>
          <Input type="password" name="password" id="labelRePassword" placeholder="Retype Password" autoComplete="off"/>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </RegisterWrapper>
  );
}

RegisterForm.propTypes = {

};

export default RegisterForm;
