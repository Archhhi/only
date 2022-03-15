import * as loginActionTypes from './actionTypes';
import { AuthResponse } from '../types';

export const loginStart = (email: string, password: string) => ({
  type: loginActionTypes.LOGIN_START,
  email,
  password,
});

export const loginSuccess = (user: AuthResponse): loginActionTypes.loginSuccessAction => ({
  type: loginActionTypes.LOGIN_SUCCESS,
  user,
});

export const logoutStart = (): loginActionTypes.logoutStartAction => ({
  type: loginActionTypes.LOGOUT_START,
});

export const loginError = (error: Error | string): loginActionTypes.loginErrorAction => ({
  type: loginActionTypes.LOGIN_ERROR,
  error,
});
