import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">InvestAI</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="h-6 w-6" />
            </button>
            <button 
              onClick={logout}
              className="flex items-center gap-2 p-2 text-gray-400 hover:text-gray-500"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};