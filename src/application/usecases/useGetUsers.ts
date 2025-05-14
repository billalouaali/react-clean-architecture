import { useGetUsersQuery } from "@/infrastructure/repositories/useUserRepository";

export function useGetUsers() {
  const query = useGetUsersQuery();
  return query;
}