// src/components/layout/Header.tsx

'use client';

import { Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 rounded-md hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">Admin</span>
        </button>
      </div>
    </header>
  );
}