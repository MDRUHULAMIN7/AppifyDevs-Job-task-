// src/lib/redux/slices/dashboardSlice.ts

import { fetchDashboardData } from '@/lib/api/dashboard';
import { DashboardStats } from '@/types/dashboard';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface DashboardState {
  data: DashboardStats | null;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk for fetching data
export const loadDashboardData = createAsyncThunk(
  'dashboard/loadData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchDashboardData();
      return data;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return rejectWithValue('Failed to load dashboard data');
    }
  }
);

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loadDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = dashboardSlice.actions;
export default dashboardSlice.reducer;