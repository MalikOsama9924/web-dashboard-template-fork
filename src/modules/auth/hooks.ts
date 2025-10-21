import type { LoginFormTypes, SignupFormTypes } from "./types";
import { useSubmitHandler } from "@/utils/hooks";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { authUserActions } from "@/redux/slices/authUser";
import authService from "./services";
import { DEFAULT_REDIRECT } from "./enums";
import { emitLogoutEvent } from "@/event-emitter/emitters";
import type { UserType } from "../user/types";
import { axiosApiRoute } from "@/lib/axios";

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { submitHandler } = useSubmitHandler();

  const login = async (
    values: LoginFormTypes,
    navigateTo: string = DEFAULT_REDIRECT.AFTER_LOGIN
  ) => {
    await submitHandler({
      loadingMsg: "Logging in...",
      successMsg: "Logged in successfully",
      onSubmit: async () => {
        const data: { success: boolean; userData: UserType } =
          await axiosApiRoute.post("/api/auth/login", values);

        // Update Redux state with user data
        dispatch(
          authUserActions.setAuthUser({
            userData: data.userData,
          })
        );

        router.push(navigateTo);
      },
      onError: (error) => {
        console.log("Login Error->", error);
      },
    });
  };

  return { login };
};

export const useSignup = () => {
  const router = useRouter();
  const { submitHandler } = useSubmitHandler();

  const signup = async (
    values: SignupFormTypes,
    redirectTo: string = DEFAULT_REDIRECT.AFTER_SIGNUP
  ) => {
    await submitHandler({
      loadingMsg: "Creating account...",
      successMsg: "Account created successfully",
      onSubmit: async () => {
        await authService.userSignup(values);
        router.push(redirectTo);
      },
    });
  };

  return { signup };
};

export const useLogout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    // emit logout event
    emitLogoutEvent();
    localStorage.clear();
    dispatch(authUserActions.removeAuthUser());
  };

  return logout;
};
