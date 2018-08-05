import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import config from '../config';
import rootReducer from './reducers';
import sagaServices from './services';

const history = createHistory();

const getLocalStorageIfPresent = (initialState) => (
  localStorage.getItem(config.LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_KEY))
    : initialState
);

export default (initialState = {}) => {
  const state = getLocalStorageIfPresent(initialState);

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [];

  const store = createStore(
    rootReducer,
    state,
    compose(applyMiddleware(...middleware), ...enhancers),
  );
  sagaMiddleware.run(sagaServices);

  store.subscribe(() => {
    localStorage.setItem(
      config.LOCAL_STORAGE_KEY,
      JSON.stringify(store.getState()),
    );
  });

  return store;
};
