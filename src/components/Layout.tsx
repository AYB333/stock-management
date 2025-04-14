import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Package, History, Users } from 'lucide-react';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">Gestion de Stock</h1>
          <p className="text-sm text-gray-600">Admin</p>
        </div>
        <nav className="mt-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100' : ''
              }`
            }
          >
            <Package className="w-5 h-5 mr-2" />
            Produits
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100' : ''
              }`
            }
          >
            <History className="w-5 h-5 mr-2" />
            Historique
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100' : ''
              }`
            }
          >
            <Users className="w-5 h-5 mr-2" />
            Utilisateurs
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;