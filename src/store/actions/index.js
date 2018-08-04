// Api actions creators helper that i use to simplify and lean actions
import { createApiActions } from '../helpers/actionHelper';

// API ACTIONS
export const REPOSITORIES = createApiActions('REPOSITORIES', ['GET']);

export default {
  REPOSITORIES
};
