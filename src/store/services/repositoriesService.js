import { takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import {
  getRepositories,
  getRepositoryContributors,
} from '../api';

// Saga helper to handle common api fetching flow to simplify and lean
import { createSaga } from '../helpers/sagaHelper';

export function loadOrganizationRepositories() {
  return createSaga(
    actions.REPOSITORIES.GET,
    action =>
      getRepositories(action.payload.organizationName)
  );
}

export function loadOrganizationRepositoryContributors() {
  return createSaga(
    actions.REPOSITORY_CONTRIBUTORS.GET,
    action =>
      getRepositoryContributors(
        action.payload.organizationName,
        action.payload.repositoryName
      )
  );
}

export default function* saga() {
  yield takeLatest(actions.REPOSITORIES.GET.SEND, loadOrganizationRepositories());
  yield takeLatest(actions.REPOSITORY_CONTRIBUTORS.GET.SEND, loadOrganizationRepositoryContributors());
}