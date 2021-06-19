import { all, fork } from 'redux-saga/effects';
import roomsSaga from './roomsSaga';

export default function* rootSaga() {
  yield all([
    fork(roomsSaga),
  ]);
}