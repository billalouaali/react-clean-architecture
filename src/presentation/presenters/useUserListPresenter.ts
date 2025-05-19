import { useState } from "react";
import { useGetUsers } from "@/application/usecases/useGetUsers";
import { userRepository } from "@/infrastructure/repositories/useUserRepository";
import { createUserListViewModel } from "@/presentation/viewmodels/mappers/createUserListViewModel";
import { useFilteredUsers } from "../hooks/useFilteredUsers";
import type { UserListPresenterResult } from "./types/UserListPresenterResult";

export function useUserListPresenter(): UserListPresenterResult {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<"name" | "email">("name");
  const { users, isLoading, error } = useGetUsers(userRepository);
  const filteredUsers = useFilteredUsers(users, search, sort);
  const viewModel = createUserListViewModel(filteredUsers);

  return {
    search,
    setSearch,
    sort,
    setSort,
    viewModel,
    isLoading,
    error
  };
}