import { ILoginRequest } from './auth.interface';

/**
 * Function to login user.
 * @param payload Data to login user:
 * - email: User valid registered email (required).
 * - password: User password (required).
 *
 * @returns Promise resolving to an object containing user role, accessToken and refreshToken.
 */
const login = async (
  payload: ILoginRequest,
): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  console.log('api clicked', payload);
  return { accessToken: 'ad', refreshToken: 'ads' };
};

export const AuthService = { login };
