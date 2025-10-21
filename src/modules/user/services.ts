import type { GetAllUsersType, UserRoleType, UserType } from "./types";
import { axiosInstance } from "@/lib/axios";

const userService = {
  getUserProfile: async (token: string): Promise<UserType> => {
    return axiosInstance.get(`/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  getAllUsers: async (
    page: number,
    limit: number
  ): Promise<GetAllUsersType> => {
    return axiosInstance.get(`/users/admin`, {
      params: { page, limit },
    });
  },

  verifyUserRole: async (userRole: UserRoleType, token: string | undefined) => {
    try {
      if (!token) {
        throw new Error("No authentication token provided");
      }

      const userData = await userService.getUserProfile(token);

      // Check if user has the required role
      if (userData?.type?.includes(userRole)) {
        return true;
      } else {
        throw new Error(`User does not have required role: ${userRole}`);
      }
    } catch (error: any) {
      console.log("Error verifying user role:", error.message);
      return false;
    }
  },
};

export default userService;
