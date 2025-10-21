import React from "react";
import { ENV } from "@/config/env";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { GuardProps } from "./types";
import userService from "@/modules/user/services";

const Guard: React.FC<GuardProps> = async ({
  children,
  requiredRole,
  redirectTo = "/unauthorized",
}) => {
  const cookieStore = await cookies();
  const isValidRole = await userService.verifyUserRole(
    requiredRole,
    cookieStore.get(ENV.USER_TOKEN_KEY)?.value
  );

  if (!isValidRole) {
    redirect(redirectTo);
  }

  return <>{children}</>;
};

export default Guard;
