import { AuthResponse } from '../types';

const actionType = 'loginActionTypes';

export const LOGIN_START = `${actionType}/LOGIN_START`;
export interface loginStartAction {
  type: typeof LOGIN_START;
  email: string;
  password: string;
}

export const LOGIN_SUCCESS = `${actionType}/LOGIN_SUCCESS`;
export interface loginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  user: AuthResponse;
}

export const LOGOUT_START = `${actionType}/LOGOUT_START`;
export interface logoutStartAction {
  type: typeof LOGOUT_START;
}

export const LOGIN_ERROR = `${actionType}/LOGIN_ERROR`;
export interface loginErrorAction {
  type: typeof LOGIN_ERROR;
  error: string | Error;
}

export type LoginAction = loginStartAction &
  loginSuccessAction &
  logoutStartAction &
  loginErrorAction;
