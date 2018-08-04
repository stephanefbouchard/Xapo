import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "react-router-redux";

import Nav from './Nav';
import Routes from './Routes';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const { store } = this.props;

    return (
      <App>
        <Provider store={store}>
          <ConnectedRouter
            history={history}
          >
            <Split
              priority={'left'}
              flex='right'
            >
              <Nav />
              <Routes />
            </Split>
          </ConnectedRouter>
        </Provider>
      </App>
    );
  }
}

export default AppContainer;
