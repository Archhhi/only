import { call, put, takeEvery } from 'redux-saga/effects';
import * as authAction from './actions';
import * as authActionTypes from './actions/actionTypes';
import { AuthResponse } from './types';
import AuthApi from './AuthApi';

function* loginSaga({ email, password }: authActionTypes.LoginAction) {
  try {
    const data: AuthResponse = yield call(AuthApi.login, email, password);
    yield put(authAction.loginSuccess(data));
  } catch (message) {
    yield put(authAction.loginError(String(message)));
  }
}

export function* authSaga() {
  yield takeEvery(authActionTypes.LOGIN_START, loginSaga);
}
