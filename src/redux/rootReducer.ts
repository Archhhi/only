import { combineReducers } from 'redux';
import { authReducer } from '../pages/Login/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
