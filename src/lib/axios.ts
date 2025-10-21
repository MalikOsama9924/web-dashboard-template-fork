import axios from "axios";
import { ENV } from "@/config/env";

export const basicUsernameAndPassword: { username: string; password: string } =
  {
    username: ENV.BASIC_AUTH_USERNAME,
    password: ENV.BASIC_AUTH_PASSWORD,
  };

let cachedToken: string | null = null;
let cachedTokenUsageCount: number = 0;
const maxTokenUsageCount = 10;

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

export const axiosApiRoute = axios.create({
  withCredentials: true,
});

axiosApiRoute.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorMessage =
      error?.response?.data?.error || error.message || "Something went wrong.";
    throw new Error(errorMessage);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorMessage =
      error?.response?.data?.error || error.message || "Something went wrong.";
    throw new Error(errorMessage);
  }
);

axiosInstance.interceptors.request.use(async (config) => {
  try {
    if (typeof window === "undefined") {
      return config;
    }

    // check if token is cached and not expired
    const isCachedTokenValid =
      cachedToken && cachedTokenUsageCount < maxTokenUsageCount;
    if (isCachedTokenValid) {
      config.headers.Authorization = `Bearer ${cachedToken}`;
      cachedTokenUsageCount++;
      return config;
    }

    const data: { token: string } = await axiosApiRoute.get(`/api/auth/token`);
    if (data.token) {
      // set cache token
      cachedToken = data.token;
      cachedTokenUsageCount = 0;
      config.headers.Authorization = `Bearer ${data.token}`;
    }
  } catch (error) {
    console.log("axios interceptor token error->", error);
  }

  return config;
});

export const clearTokenCache = () => {
  cachedToken = null;
  cachedTokenUsageCount = 0;
};
