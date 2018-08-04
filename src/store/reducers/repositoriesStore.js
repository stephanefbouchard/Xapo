import actions from '../actions';

// Api call reducer helper that i use to simplify and lean reducers
import { apiCallReducer } from '../helpers/actionHelper';

const initialState = {
  repositories: null,
  repositoryContributors: null,
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
  state = apiCallReducer(state, action, actions.REPOSITORY_CONTRIBUTORS, 'GET', {
    request: (state) => {
      return {
        ...state,
        repositoryContributors: null
      }
    },
    success: (state, action) => {
      return {
        ...state,
        repositoryContributors: action.data
      }
    },
  });
  return state;
}
