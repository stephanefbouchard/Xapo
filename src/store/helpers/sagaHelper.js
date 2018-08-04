import { put } from 'redux-saga/effects';

export const createSaga = (actionKey, payloadFn, nextAction) => {
  return function*(action) {
    try {
      yield put({ type: actionKey.REQUEST, payload: action.payload });
      let { data } = yield payloadFn(action);
      yield put({ type: actionKey.SUCCESS, data });
      if (nextAction) {
        yield put({ type: nextAction });
      }
    } catch (error) {
      yield put({ type: actionKey.FAILURE, error });
    }
  };
};
