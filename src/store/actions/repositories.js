import {
  REPOSITORIES
} from '../actions';

export function fetchRepositories(organizationName) {
  return {
    type: REPOSITORIES.GET.SEND,
    payload: {
      organizationName: organizationName
    }
  }
}
