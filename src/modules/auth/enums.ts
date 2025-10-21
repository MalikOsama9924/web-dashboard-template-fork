export const AUTH_ROUTES = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
} as const;

export const DEFAULT_REDIRECT = {
  AFTER_LOGIN: "/",
  AFTER_SIGNUP: "/auth/login",
  AFTER_LOGOUT: "/auth/login",
} as const;
