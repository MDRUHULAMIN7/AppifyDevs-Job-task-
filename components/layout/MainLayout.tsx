// src/components/layout/MainLayout.tsx

'use client';

import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useAppSelector } from '@/redux/hooks';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { sidebarCollapsed } = useAppSelector((state) => state.theme);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      <div
        className={`transition-all duration-300 ${
          sidebarCollapsed ? 'lg:pl-18' : 'lg:pl-65'
        }`}
      >
        <Header />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}