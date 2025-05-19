import { useQuery } from "@tanstack/react-query";
import type { User } from "@/domain/entities/User";
import { getUsers as getUsersApi } from "@/infrastructure/api/userApiClient";
import type { GetUsersQueryResult } from "@/domain/types/GetUsersQueryResult";
import type { UserRepository } from "@/domain/repositories/UserRepository";

function useGetUsersQuery(): GetUsersQueryResult {
  const query = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsersApi
  });
  return {
    ...query,
    users: query.data ?? []
  };
}

export const userRepository: UserRepository = {
  useGetUsersQuery,
};
