import { useQuery } from "@tanstack/react-query";
import userService from "./services";

export const useGetAllUsers = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ["get-all-users", page, limit],
    queryFn: () => userService.getAllUsers(page, limit),
  });
};
