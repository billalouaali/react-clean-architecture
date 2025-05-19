import type { User } from "@/domain/entities/User";
import type { UserViewModel } from "../types/UserViewModel";

export function createUserListViewModel(userList: User[]): UserViewModel[] {
  return userList.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    age: user.age,
  }));
}