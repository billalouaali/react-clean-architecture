import type { User } from "@/domain/entities/User";

export function createUserListViewModel(userList: User[]): User[] {
  return userList.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    age: user.age,
  }));
}