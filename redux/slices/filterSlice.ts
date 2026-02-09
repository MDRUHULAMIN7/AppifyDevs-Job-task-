// src/lib/redux/slices/filterSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DashboardFilters, DateRange, UserType } from '@/types/dashboard';

const initialState: DashboardFilters = {
  dateRange: '30days',
  userType: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setDateRange: (state, action: PayloadAction<DateRange>) => {
      state.dateRange = action.payload;
    },
    setUserType: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setDateRange, setUserType, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;