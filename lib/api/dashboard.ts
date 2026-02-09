 import type { DashboardStats } from '@/types/dashboard';
import mockData from '@/data/mockData.json';


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchDashboardData = async (): Promise<DashboardStats> => {
  try {
    // Simulate network delay
    await delay(1000);

    // Mock API response
    // Real implementation :
    // const response = await axios.get('/api/dashboard/stats');
    // return response.data;

    return mockData.stats as DashboardStats;
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    throw new Error('Failed to fetch dashboard data');
  }
};