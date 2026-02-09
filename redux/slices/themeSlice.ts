// src/lib/redux/slices/themeSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  darkMode: boolean;
  sidebarOpen: boolean;
  sidebarCollapsed: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
  sidebarOpen: false,
  sidebarCollapsed: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', JSON.stringify(state.darkMode));
        document.documentElement.classList.toggle('dark', state.darkMode);
      }
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', JSON.stringify(action.payload));
        document.documentElement.classList.toggle('dark', action.payload);
      }
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});

export const { toggleDarkMode, setDarkMode, setSidebarOpen, toggleSidebar } =
  themeSlice.actions;
export default themeSlice.reducer;