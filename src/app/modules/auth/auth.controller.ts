import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AuthService } from './auth.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ISignupResponse } from './auth.interface';

/**
 * Controller function to login user.
 * @param req Request object containing the payload for login user in request's body.
 * @param res Response object to send the HTTP response.
 * @returns A promise resolving to a data object containing the user's role, access token and send refreshToken in cookie.
 */
const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  sendResponse<ISignupResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: result,
  });
});

export const AuthController = {
  login,
};
