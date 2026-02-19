
'use client';

import { Provider } from 'react-redux';
import { ReactNode, useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setDarkMode } from '@/redux/slices/themeSlice';
import { store } from '@/redux/store';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

function ThemeInitializer({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    
    if (savedTheme !== null) {
      const isDark = JSON.parse(savedTheme);
      dispatch(setDarkMode(isDark));
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      dispatch(setDarkMode(isDark));
    }
  }, [dispatch]);

  return <>{children}</>;
}

// Main Providers component
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeInitializer>
          {children}
        </ThemeInitializer>
      </Provider>
    </ErrorBoundary>
  );
}
