import React from 'react';
import ReactDOM from 'react-dom';

import Main from './js/Main';

import registerServiceWorker from './registerServiceWorker';

import 'grommet/grommet.min.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
