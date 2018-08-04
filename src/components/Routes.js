import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './sections/dashboard'
import Repository from './sections/repository'

class Routes extends Component {
  render() {
    return <Switch>
      <Route exact={true} path='/' component={Dashboard} />
      <Route path='/repo/:organization/:repository' component={Repository} />
    </Switch>;
  }
}

export default Routes;
