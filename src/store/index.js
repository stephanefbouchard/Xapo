import createStore from './createStore';

const initialState = window.__INITIAL_STATE__;

const store = createStore(initialState);
export default store;