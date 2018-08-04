// Api actions creators helper that i use to simplify and lean actions
import { createApiActions } from '../helpers/actionHelper';

// API ACTIONS
export const REPOSITORIES = createApiActions('REPOSITORIES', ['GET']);
export const REPOSITORY_CONTRIBUTORS = createApiActions('REPOSITORY_CONTRIBUTORS', ['GET']);

export default {
  REPOSITORIES,
  REPOSITORY_CONTRIBUTORS
};
