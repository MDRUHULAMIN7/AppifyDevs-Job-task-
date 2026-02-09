// src/components/layout/Sidebar.tsx

'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSidebarOpen, toggleSidebar } from '@/redux/slices/themeSlice';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronLeft,
  X,
  Sparkles,
  LogOut,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: ShoppingCart, label: 'Orders', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: Settings, label: 'Settings', active: false },
  { icon: HelpCircle, label: 'Help', active: false },
];

export function Sidebar() {
  const dispatch = useAppDispatch();
  const { sidebarOpen, sidebarCollapsed } = useAppSelector((state) => state.theme);

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => dispatch(setSidebarOpen(false))}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full flex-col bg-card/95 backdrop-blur-xl transition-all duration-300 ease-out lg:relative lg:z-auto border-r ${
          sidebarOpen ? 'w-65' : 'w-0 lg:w-18'
        } ${!sidebarOpen && 'overflow-hidden lg:overflow-visible'}`}
        style={{ borderColor: 'var(--color-border)' }}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between px-4">
          <div
            className={`flex items-center gap-3 transition-opacity duration-200 ${
              sidebarCollapsed && 'lg:opacity-0'
            }`}
          >
            <div
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white font-bold text-sm shadow-lg"
              style={{
                background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-purple-500))',
              }}
            >
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="whitespace-nowrap">
              <span className="font-bold text-foreground text-[15px] tracking-tight">Analytics</span>
              <span className="font-bold text-primary text-[15px]">Hub</span>
            </div>
          </div>

          <button
            onClick={() => dispatch(toggleSidebar())}
            className="hidden lg:flex h-7 w-7 items-center justify-center rounded-lg hover:bg-accent text-muted-foreground transition-all duration-200 hover:text-foreground"
          >
            <ChevronLeft
              className={`h-4 w-4 transition-transform duration-300 ${
                sidebarCollapsed && 'rotate-180'
              }`}
            />
          </button>

          <button
            onClick={() => dispatch(setSidebarOpen(false))}
            className="flex lg:hidden h-7 w-7 items-center justify-center rounded-lg hover:bg-accent text-muted-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {!sidebarCollapsed && (
            <p className="px-3 mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
              Main Menu
            </p>
          )}
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                item.active
                  ? 'text-white shadow-lg'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
              style={
                item.active
                  ? {
                      background:
                        'linear-gradient(to right, var(--color-primary), var(--color-primary))',
                    }
                  : {}
              }
            >
              <item.icon
                className={`h-4.5 w-4.5 shrink-0 ${sidebarCollapsed && 'lg:mx-auto'}`}
              />
              <span
                className={`whitespace-nowrap transition-opacity duration-200 ${
                  sidebarCollapsed && 'lg:hidden'
                }`}
              >
                {item.label}
              </span>
              {item.active && !sidebarCollapsed && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-white/80" />
              )}
            </button>
          ))}
        </nav>

        {/* Bottom User */}
        <div className="border-t p-3" style={{ borderColor: 'var(--color-border)' }}>
          <div
            className={`flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-accent cursor-pointer ${
              sidebarCollapsed && 'lg:justify-center lg:p-2'
            }`}
          >
            <div className="relative h-9 w-9 shrink-0">
              <div
                className="h-9 w-9 rounded-xl flex items-center justify-center text-white font-semibold text-sm shadow-md"
                style={{
                  background:
                    'linear-gradient(to bottom right, var(--color-violet-500), var(--color-indigo-600))',
                }}
              >
                AD
              </div>
              <div
                className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2"
                style={{
                  backgroundColor: 'var(--color-emerald-400)',
                  borderColor: 'var(--color-card)',
                }}
              />
            </div>
            <div
              className={`min-w-0 flex-1 transition-opacity duration-200 ${
                sidebarCollapsed && 'lg:hidden'
              }`}
            >
              <p className="truncate text-sm font-semibold text-foreground">Admin</p>
              <p className="truncate text-xs text-muted-foreground">Online</p>
            </div>
            <LogOut
              className={`h-4 w-4 text-muted-foreground hover:text-foreground transition-colors shrink-0 ${
                sidebarCollapsed && 'lg:hidden'
              }`}
            />
          </div>
        </div>
      </aside>
    </>
  );
}