import { useState } from "react";
import { useGetUsers } from "@/application/usecases/useGetUsers";
import { createUserListViewModel } from "@/presentation/viewmodels/createUserListViewModel";
import { useFilteredUsers } from "../hooks/useFilteredUsers";

export function useUserListPresenter() {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<"name" | "email">("name");
  const { users, isLoading, error } = useGetUsers();
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