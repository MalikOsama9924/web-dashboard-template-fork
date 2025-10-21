import type { USER_ROLES } from "./enums";

export type UserRoleType = `${USER_ROLES}`;

export interface UserType {
  /**
   * User ID
   */
  _id: string;
  email: string;
  /**
   * User first name
   */
  firstName: string;
  lastName?: string;
  /**
   * User roles
   * @example ["user","admin"]
   */
  type: UserRoleType[];
}

export interface AuthUserType {
  user: null | UserType;
}

export type GetAllUsersType = {
  data: UserType[];
  totalCount: number;
  totalPages: number;
};
