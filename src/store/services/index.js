import { all, fork } from 'redux-saga/effects';
import repositoriesService from './repositoriesService';

export default function* sagas() {
  yield all([
    fork(repositoriesService),
  ]);
}
