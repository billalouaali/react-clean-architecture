import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserListPage } from '@/presentation/pages/UserListPage';

import '@/index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
          <header className="bg-blue-700 text-white py-8 px-4 text-center shadow">
            <h1 className="text-3xl font-bold mb-2">Mes utilisateurs</h1>
            <p className="text-lg">Bienvenue sur notre application de Clean Architecture</p>
          </header>
          <main className="flex-1 py-8 px-4 max-w-2xl mx-auto w-full text-center">
            <Routes>
              <Route path="/" element={
                <>
                  <h2 className="text-2xl font-semibold mb-4">Page d'accueil</h2>
                  <p className="mb-6">Découvrez nos utilisateurs</p>
                  <Link
                    to="/users"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                  >
                    Voir les utilisateurss
                  </Link>
                </>
              } />
              <Route path="/users" element={<UserListPage />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-gray-200 text-center py-4 text-sm">
            &copy; {new Date().getFullYear()} Mes utilisateurs
          </footer>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
