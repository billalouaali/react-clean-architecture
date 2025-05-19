import type { UseQueryResult } from "@tanstack/react-query";
import type { User } from "@/domain/entities/User";

export type GetUsersQueryResult = UseQueryResult<User[], Error> & {
  users: User[];
};