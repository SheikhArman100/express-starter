import { Role } from '../types/common';
import { IGenericErrorMessages } from './error';
import { Types } from 'mongoose';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessages[];
};

/**
 * Pagination options for calculate pagination data
 */
export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

/**
 * Response data formate
 * @template T the response's main data type
 */
export type IGenericResponse<T> = {
  meta: {
    page: number;
    limit: number;
    count: number;
  };
  data: T;
};

/**
 * User information in jwt token
 */
export type UserInfoFromToken = {
  /** User database id */
  id: Types.ObjectId;
  role: Role;
  iat: number;
  exp: number;
};

/**
 * File stored location
 * @group Enum
 */
export type DiskTypeEnum = 'local' | 'aws' | 'social';

/**
 * Image / video or any type of file description
 */
export type FileType = {
  diskType: DiskTypeEnum;
  path: string;
  originalName: string;
  modifiedName: string;
};
