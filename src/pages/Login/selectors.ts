import { RootStateType } from '../../redux/rootReducer';
import { AuthResponse } from './types';

export const getIsAuth = ({ auth: { isAuth } }: RootStateType): boolean => isAuth;
export const getAuthError = ({ auth: { error } }: RootStateType): Error | string => error;
export const getAuthLoading = ({ auth: { loading } }: RootStateType): boolean => loading;
export const getUser = ({ auth: { user } }: RootStateType): AuthResponse | null => user;
