import { useUserListPresenter } from "@/presentation/presenters/useUserListPresenter";
import { UserInputField } from "@/presentation/components/UserInputField";
import { UserList } from "@/presentation/components/UserList";

export function UserListPage() {
  const { search, setSearch, sort, setSort, viewModel, isLoading, error } = useUserListPresenter();

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Liste des utilisateurs</h1>
      <UserInputField value={search} onChange={setSearch} />
      <div className="flex items-center gap-4 my-4">
        <label htmlFor="sort" className="font-medium text-gray-700">Trier par :</label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as "name" | "email")}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Nom</option>
          <option value="email">Email</option>
        </select>
      </div>
      <UserList userList={viewModel} />
    </div>
  );
}