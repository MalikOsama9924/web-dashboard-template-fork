import { axiosInstance, basicUsernameAndPassword } from "@/lib/axios";
import type { LoginResponseType, SignupFormTypes } from "./types";

const authService = {
  login: async (email: string, password: string) => {
    const data = {
      email,
      password,
    };

    const res: LoginResponseType = await axiosInstance.post(
      `/auth/login`,
      data,
      {
        auth: {
          ...basicUsernameAndPassword,
        },
      }
    );

    return res;
  },

  logoutUser: async () => {
    return axiosInstance.post(
      `/auth/logout`,
      {},
      {
        auth: {
          ...basicUsernameAndPassword,
        },
      }
    );
  },

  userSignup: async (data: SignupFormTypes) => {
    return axiosInstance.post(`/auth/signup`, data, {
      auth: {
        ...basicUsernameAndPassword,
      },
    });
  },
};

export default authService;
