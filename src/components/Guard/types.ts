import type { UserRoleType } from "@/modules/user/types";

export type GuardProps = {
  children: React.ReactNode;
  requiredRole: UserRoleType;
  redirectTo?: string;
};
