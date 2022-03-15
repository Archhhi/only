import { all } from 'redux-saga/effects';
import { authSaga } from '../pages/Login/sagas';

export function* rootSaga() {
  yield all([authSaga()]);
}
