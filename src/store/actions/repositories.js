import {
  REPOSITORIES,
  REPOSITORY_CONTRIBUTORS
} from '../actions';

export function fetchRepositories(organizationName) {
  return {
    type: REPOSITORIES.GET.SEND,
    payload: {
      organizationName: organizationName
    }
  }
}

export function fetchRepositoryContributors(organizationName, repositoryName) {
  return {
    type: REPOSITORY_CONTRIBUTORS.GET.SEND,
    payload: {
      organizationName: organizationName,
      repositoryName: repositoryName
    }
  }
}
