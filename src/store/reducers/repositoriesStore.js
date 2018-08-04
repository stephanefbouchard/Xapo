import actions from '../actions';

// Api call reducer helper that i use to simplify and lean reducers
import { apiCallReducer } from '../helpers/actionHelper';

const initialState = {
  repositories: null,
};

export default function learningStore(state = initialState, action) {
  state = apiCallReducer(state, action, actions.REPOSITORIES, 'GET', {
    success: (state, action) => ({
      ...state,
      repositories: action.data,
    }),
  });
  return state;
}
