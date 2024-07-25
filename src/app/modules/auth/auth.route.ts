import express from 'express';

import { AuthController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

/**
 * Route to create new user.
 * @method POST
 * @param req.body Data to create new user:
 *             - name: User full name (required).
 *             - email: User valid unique email (required).
 *             - password: User password (required).
 *             - nickName: User nickname (optional).
 */
router.post(
  '/login',
  validateRequest(AuthValidation.loginUserZodSchema),
  AuthController.login,
);

export const AuthRoutes = router;
