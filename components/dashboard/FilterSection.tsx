'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setDateRange, setUserType } from '@/redux/slices/filterSlice';
import type { DateRange, UserType } from '@/types/dashboard';

const dateRangeOptions: { value: DateRange; label: string }[] = [
  { value: '7days', label: 'Last 7 days' },
  { value: '30days', label: 'Last 30 days' },
  { value: '12months', label: 'Last 12 months' },
];

const userTypeOptions: { value: UserType; label: string }[] = [
  { value: 'all', label: 'All Users' },
  { value: 'free', label: 'Free Users' },
  { value: 'premium', label: 'Premium Users' },
  { value: 'enterprise', label: 'Enterprise Users' },
];

export function FilterSection() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filter);

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date Range
          </label>
          <select
            value={filters.dateRange}
            onChange={(e) => dispatch(setDateRange(e.target.value as DateRange))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {dateRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            User Type
          </label>
          <select
            value={filters.userType}
            onChange={(e) => dispatch(setUserType(e.target.value as UserType))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {userTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}