// src/components/layout/Sidebar.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Users, ShoppingCart, BarChart3, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarClasses = `
    fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200
    transition-all duration-300
    ${collapsed ? 'w-16' : 'w-64'}
    ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  `;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={sidebarClasses}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            {!collapsed && (
              <span className="text-xl font-bold text-gray-900">
                Analytics
              </span>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:block p-2 rounded-md hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              const linkClasses = `
                flex items-center gap-3 px-3 py-2 rounded-md
                text-gray-700 hover:bg-gray-100 transition-colors
                ${collapsed ? 'justify-center' : ''}
              `;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={linkClasses}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
