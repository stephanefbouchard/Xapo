import { takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import { getRepositories } from '../api';

// Saga helper to handle common api fetching flow to simplify and lean
import { createSaga } from '../helpers/sagaHelper';

export function loadOrganizationRepositories() {
  return createSaga(
    actions.REPOSITORIES.GET,
    action =>
      getRepositories(action.payload.organizationName)
  );
}

export default function* saga() {
  yield takeLatest(actions.REPOSITORIES.GET.SEND, loadOrganizationRepositories());
}