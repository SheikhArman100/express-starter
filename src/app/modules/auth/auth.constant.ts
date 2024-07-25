import { DiskTypeEnum } from '../../../interfaces/common';

export type Role = 'super_admin' | 'admin' | '............';

export const userRoles: Role[] = ['super_admin', 'admin', '............'];

export const diskType: DiskTypeEnum[] = ['local', 'aws', 'social'];
