import type { Dispatch, SetStateAction } from "react";
import type { UserViewModel } from "@/presentation/viewmodels/types/UserViewModel";

export type UserListPresenterResult = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  sort: "name" | "email";
  setSort: Dispatch<SetStateAction<"name" | "email">>;
  viewModel: UserViewModel[];
  isLoading: boolean;
  error: unknown;
};