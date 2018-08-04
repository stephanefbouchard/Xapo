import actions from '../actions';

// Api call reducer helper that i use to simplify and lean reducers
import { apiCallReducer } from '../helpers/actionHelper';

const initialState = {
  repositories: null,
};

const sortByWatchers = (repositories) => (
  repositories.sort((a, b) => ( b['watchers'] - a['watchers']))
);

export default function learningStore(state = initialState, action) {
  state = apiCallReducer(state, action, actions.REPOSITORIES, 'GET', {
    success: (state, action) => ({
      ...state,
      repositories: sortByWatchers(action.data)
    }),
  });
  return state;
}
