import { z } from 'zod';

const loginUserZodSchema = z.object({
  body: z
    .object({
      email: z
        .string({
          required_error: 'email is required',
        })
        .email({ message: 'Invalid email format' }),
      password: z.string({
        required_error: 'password is required',
      }),
    })
    .strict(),
});

export const AuthValidation = {
  loginUserZodSchema,
};
