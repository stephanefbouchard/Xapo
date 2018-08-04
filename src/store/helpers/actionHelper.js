const NAME = 'NAME';
const SEND = 'SEND';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const createApiRequestTypes = namespace => {
  let states = [SEND, REQUEST, SUCCESS, FAILURE].reduce((states, state) => {
    states[state] = `${namespace}_${state}`;
    return states;
  }, {});
  states[NAME] = `${namespace}`;
  return states;
};

export const createApiActions = (namespace, actions) => {
  return actions.reduce((actions, action) => {
    actions[action] = createApiRequestTypes(`${namespace}_${action}`);
    return actions;
  }, {});
};

export const apiCallReducer = (
  state,
  action,
  namespace,
  apiAction,
  callback,
) => {
  let actions = namespace[apiAction];

  // Initial state
  state.api = state.api || {};
  let apiKey = actions[NAME];
  if (!state.api.hasOwnProperty(apiKey)) {
    state.api[apiKey] = {
      isFetching: false,
      success: false,
      error: null,
    };
  }

  // Handing actions type
  let newApi = state.api;
  switch (action.type) {
    case namespace[apiAction].REQUEST:
      newApi[apiKey] = {
        ...newApi[apiKey],
        isFetching: true,
        success: false,
      };
      return callback.request
        ? callback.request({ ...state, api: newApi }, action)
        : { ...state, api: newApi };
    case namespace[apiAction].SUCCESS:
      newApi[apiKey] = {
        ...newApi[apiKey],
        isFetching: false,
        success: true,
        error: null,
      };
      return callback.success
        ? callback.success({ ...state, api: newApi }, action)
        : { ...state, api: newApi };
    case namespace[apiAction].FAILURE:
      newApi[apiKey] = {
        ...newApi[apiKey],
        isFetching: false,
        success: false,
        error: action.error,
      };
      return callback.failure
        ? callback.failure({ ...state, api: newApi }, action)
        : { ...state, api: newApi };
    default:
      return { ...state, api: newApi };
  }
};
