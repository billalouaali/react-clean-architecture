import type { UserViewModel } from "@/presentation/viewmodels/types/UserViewModel";

type Props = {
  userList: UserViewModel[];
};

export function UserList({ userList }: Props) {
  return (
    userList.length === 0 ?
      <p className="text-center text-gray-500 italic my-8">Aucun utilisateur trouvé.</p>
      :
      <ul className="divide-y divide-gray-200 bg-gray-50 rounded-lg shadow">
        {userList.map((u) => (
          <li key={u.id} className="flex justify-between items-center px-4 py-3 hover:bg-blue-50 transition-colors">
            <span className="font-semibold text-gray-800">{u.name}</span>
            <span className="text-gray-600">{u.email}</span>
          </li>
        ))}
      </ul>
  );
}