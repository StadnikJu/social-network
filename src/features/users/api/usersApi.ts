import { baseApi } from "@/app/api/baseApi";
import { UsersResponse } from "@/common/types/users";

export const usersApi = {
  getUsers(page: number, count: number) {
    return baseApi.get<UsersResponse>("/users", {
      params: { page, count }
    });
  },
};
