import { AuthState } from './types';
import * as authActionTypes from './actions/actionTypes';

const initialState: AuthState = {
  loading: false,
  error: '',
  isAuth: false,
  user: null,
};

export const authReducer = (
  state: AuthState = initialState,
  action: authActionTypes.LoginAction
): AuthState => {
  switch (action.type) {
    case authActionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case authActionTypes.LOGIN_SUCCESS: {
      console.log(action.user);
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.user,
      };
    }
    case authActionTypes.LOGOUT_START: {
      console.log(action.user);
      return {
        ...state,
        loading: false,
        isAuth: false,
      };
    }
    case authActionTypes.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};
