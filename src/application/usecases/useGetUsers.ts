import type { GetUsersQueryResult } from "@/domain/types/GetUsersQueryResult";
import type { UserRepository } from "@/domain/repositories/UserRepository";

export function useGetUsers(userRepository: UserRepository): GetUsersQueryResult {
  const query = userRepository.useGetUsersQuery();
  return query;
}