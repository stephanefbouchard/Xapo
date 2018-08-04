import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import repositoriesStore from './repositoriesStore';

const appReducer = combineReducers({
  router: routerReducer,
  repositoriesStore,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
