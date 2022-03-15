import { CheckRequestData } from './types';
import { mockFetch } from '../../common/mock/mock-fetch';

export default class AuthApi {
  static async login(email: string, password: string): Promise<CheckRequestData | any> {
    return mockFetch({ email, password });
  }
}
