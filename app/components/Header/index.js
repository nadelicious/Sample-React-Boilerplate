/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
import {
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Collapse,
	Nav,
	NavLink,
	NavItem
} from 'reactstrap';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header(props) {
  return (
    <header>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={props.toggle} />
          <NavbarBrand tag={Link} to="/">Cogs</NavbarBrand>
          <Collapse isOpen={props.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/register">
                	<FormattedMessage {...messages.register}/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/login">
                	<FormattedMessage {...messages.login}/>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
  );
}

Header.propTypes = {
	toggle: React.PropTypes.func,
	isOpen: React.PropTypes.bool
};

export default Header;
