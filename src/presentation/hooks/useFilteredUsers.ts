import type { User } from "@/domain/entities/User";
import { useMemo } from "react";

export function useFilteredUsers(
  users: User[],
  search: string,
  sortBy: "name" | "email"
): User[] {
  const normalizedSearch = search.trim().toLowerCase();

  return useMemo(() => {
    if (!normalizedSearch) return users;

    return users.filter((user) => {
      const targetValue = sortBy === "name" ? user.name : user.email;
      return targetValue.toLowerCase().includes(normalizedSearch);
    });
  }, [users, normalizedSearch, sortBy]);
}
