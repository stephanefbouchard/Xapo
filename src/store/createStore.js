import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import config from '../config';
import rootReducer from './reducers';
import sagaServices from './services';

const history = createHistory();

const getLocalStorageIfPresent = () => (
  localStorage.getItem(config.LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_KEY))
    : {}
);

export default () => {
  const initialState = getLocalStorageIfPresent();

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [];

  const store = createStore(
    rootReducer,
    initialState,
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
