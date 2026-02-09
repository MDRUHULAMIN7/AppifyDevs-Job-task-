// src/components/layout/Header.tsx

'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Menu,
  Bell,
  Sun,
  Moon,
  ChevronDown,
  LogOut,
  User,
  Settings,
  Search,
  Command,
} from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setSidebarOpen, toggleDarkMode } from '@/redux/slices/themeSlice';

export function Header() {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.theme);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 backdrop-blur-xl px-4 lg:px-6"
      style={{ borderColor: 'var(--color-border)' }}
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(setSidebarOpen(true))}
          className="flex lg:hidden h-9 w-9 items-center justify-center rounded-xl hover:bg-accent transition-colors"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden lg:block">
          <h1 className="text-lg font-bold text-foreground tracking-tight">Dashboard</h1>
          <p className="text-xs text-muted-foreground">Welcome back, Admin</p>
        </div>
      </div>

      {/* Center: Search */}
      <div className="hidden md:flex items-center max-w-md flex-1 mx-8">
        <div className="relative w-full group">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors"
            style={{ color: 'var(--color-muted-foreground)' }}
          />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full h-10 pl-10 pr-16 rounded-xl bg-accent border text-sm text-foreground outline-none transition-all"
            style={{
              backgroundColor: 'var(--color-accent)',
              borderColor: 'var(--color-border)',
            }}
          />
          <div
            className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded-md border"
            style={{
              backgroundColor: 'var(--color-muted)',
              borderColor: 'var(--color-border)',
            }}
          >
            <Command className="h-3 w-3" style={{ color: 'var(--color-muted-foreground)' }} />
            <span
              className="text-[10px] font-medium"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              K
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-1.5">
        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="flex h-9 w-9 items-center justify-center rounded-xl hover:bg-accent transition-all duration-200"
          style={{ color: 'var(--color-muted-foreground)' }}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
        </button>

        {/* Notifications */}
        <div ref={notifRef} className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl hover:bg-accent transition-all duration-200"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            <Bell className="h-4.5 w-4.5" />
            <span
              className="absolute right-2 top-2 h-2 w-2 rounded-full ring-2"
              style={{
                backgroundColor: 'var(--color-rose-500)',
                borderColor: 'var(--color-background)',
              }}
            />
          </button>

          {notifOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-80 rounded-2xl border bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="px-4 py-3 flex items-center justify-between">
                <p className="text-sm font-bold text-foreground">Notifications</p>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-primary-foreground)',
                  }}
                >
                  3 new
                </span>
              </div>
              <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
                {[
                  {
                    title: 'New order received',
                    desc: 'Order #1234 from Sarah M.',
                    time: '2 min ago',
                    dotColor: 'var(--color-emerald-400)',
                  },
                  {
                    title: 'Revenue milestone',
                    desc: 'You reached $50K this month!',
                    time: '1 hour ago',
                    dotColor: 'var(--color-primary)',
                  },
                  {
                    title: 'New user registered',
                    desc: 'Mike Johnson joined as Premium',
                    time: '3 hours ago',
                    dotColor: 'var(--color-amber-400)',
                  },
                ].map((n) => (
                  <div
                    key={n.title}
                    className="px-4 py-3 hover:bg-accent/50 transition-colors cursor-pointer flex gap-3"
                  >
                    <div
                      className="h-2 w-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: n.dotColor }}
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">{n.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{n.desc}</p>
                      <p
                        className="text-[10px] mt-1"
                        style={{ color: 'var(--color-muted-foreground)' }}
                      >
                        {n.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2.5 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <button className="text-xs font-medium text-primary hover:opacity-80 transition-colors w-full text-center">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div
          className="h-6 w-px bg-border mx-1 hidden sm:block"
          style={{ backgroundColor: 'var(--color-border)' }}
        />

        {/* Profile */}
        <div ref={profileRef} className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2.5 rounded-xl px-2 py-1.5 hover:bg-accent transition-all duration-200"
          >
            <div
              className="h-8 w-8 rounded-xl flex items-center justify-center text-white font-semibold text-xs shadow-md"
              style={{
                background:
                  'linear-gradient(to bottom right, var(--color-violet-500), var(--color-indigo-600))',
              }}
            >
              AD
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-foreground leading-tight">Admin User</p>
              <p className="text-[10px] text-muted-foreground">Administrator</p>
            </div>
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground hidden md:block" />
          </button>

          {profileOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-52 rounded-2xl border bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-sm font-semibold text-foreground">Admin User</p>
                <p className="text-xs text-muted-foreground">admin@analytics.com</p>
              </div>
              <div className="p-1.5">
                {[
                  { icon: User, label: 'Profile' },
                  { icon: Settings, label: 'Settings' },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-all duration-200"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="p-1.5 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <button
                  className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-all duration-200"
                  style={{ color: 'var(--color-rose-500)' }}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}