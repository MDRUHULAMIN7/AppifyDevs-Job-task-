
'use client';

import { useAppDispatch } from '@/redux/hooks';
import { setDarkMode } from '@/redux/slices/themeSlice';
import { useEffect, ReactNode } from 'react';

interface ThemeInitializerProps {
  children: ReactNode;
}

export function ThemeInitializer({ children }: ThemeInitializerProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // LocalStorage থেকে theme load করো
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme !== null) {
      const isDark = JSON.parse(savedTheme);
      dispatch(setDarkMode(isDark));
    } else {
      // System preference check
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch(setDarkMode(isDark));
    }
  }, [dispatch]);

  return <>{children}</>;
}