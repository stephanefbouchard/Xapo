import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav'
import Content from './Content'

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

class Main extends Component {
  render() {
    return (
      <App>
        <Router>
          <Split
            priority={'left'}
            flex='right'
          >
            <Nav />
            <Switch>
              <Route exact={true} path='/' component={Content} />
              <Route path='/wazzzup' component={Content} />
            </Switch>
          </Split>
        </Router>

        <Split
          priority={'left'}
          flex='right'
        >

        </Split>
      </App>
    );
  }
}

export default Main;
