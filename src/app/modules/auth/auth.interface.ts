import { Model, Types } from 'mongoose';
import { Role } from './auth.constant';
import { DiskTypeEnum } from '../../../interfaces/common';

export type IUser = {
  id: string;
  name: string;
  nickName: string;
  email: string;
  phoneNumber?: string;
  password: string;
  role: Role;
  isActive: boolean;
  imgUrl?: {
    diskType: DiskTypeEnum;
    path: string;
    originalName: string;
    modifiedName: string;
  };
  updatedBy: Types.ObjectId;
  createdBy: Types.ObjectId;
};

export type UserModel = {
  isUserExist(
    email: string,
  ): Promise<Pick<IUser, 'id' | 'password' | 'role' | 'isActive'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
} & Model<IUser>;

export type CreateUserResponse = {
  name: string;
};

export type ILoginRequest = {
  email: string;
  password: string;
};

export type ISignupResponse = {
  accessToken: string;
  user?: IUser | null;
};
