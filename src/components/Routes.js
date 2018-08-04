import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Content from './Content'

class Routes extends Component {
  render() {
    return <Switch>
      <Route exact={true} path='/' component={Content} />
      <Route path='/wazzzup' component={Content} />
    </Switch>;
  }
}

export default Routes;
