/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'bootstrap/dist/css/bootstrap.css';

const AppWrapper = styled.div`
 display; block;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
        <AppWrapper>
          <Helmet
            titleTemplate="%s - Cogs"
            defaultTitle="Cogs"
            meta={[
              { name: 'description', content: 'COGS' },
            ]}
            link={[
              { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css'},
              { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.3/toastr.min.css'},
            ]}
          />
          <Header toggle={this.toggle} isOpen={this.state.isOpen} />
          {React.Children.toArray(this.props.children)}
          <Footer />
        </AppWrapper>
    );
  }
}
