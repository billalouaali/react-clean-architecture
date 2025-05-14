import type { User } from "@/domain/entities/User";
import { getUsers as getUsersApi } from "@/infrastructure/api/userApiClient";
import { useQuery } from "@tanstack/react-query";

export function useGetUsersQuery() {
  const { data: users, isLoading, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: getUsersApi
  });
  return { users: users ?? [], isLoading, error };
}
