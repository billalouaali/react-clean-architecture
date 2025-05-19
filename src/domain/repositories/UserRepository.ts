import type { GetUsersQueryResult } from "@/domain/types/GetUsersQueryResult";

export interface UserRepository {
  useGetUsersQuery(): GetUsersQueryResult;
}
