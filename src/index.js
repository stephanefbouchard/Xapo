import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './components/AppContainer';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

import 'grommet/grommet.min.css';

const MOUNT_NODE = document.getElementById('root');

// For dev debugging purpose only
// TO REMOVE
window.store = store;

let render = () => {
  ReactDOM.render(<AppContainer store={store} />, MOUNT_NODE);
};

render();

registerServiceWorker();
