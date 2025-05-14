export async function getUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!response.ok) throw new Error("Erreur lors du chargement des utilisateurs");
  return response.json();
}