export interface AuthRawData {
  id: number;
  email: string;
}

export interface CheckRequestData {
  email: string;
  password: string;
}

export type AuthResponse = AuthRawData;

export interface AuthState {
  loading: boolean;
  error: Error | string;
  isAuth: boolean;
  user: AuthResponse | null;
}
