import type { DashboardFilters, DashboardStats, UserDistribution } from '@/types/dashboard';
import mockData from '@/data/mockData.json';


const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const parseNumber = (value: string | number): number => {
  if (typeof value === 'number') return value;
  const cleaned = value.replace(/[^0-9.]/g, '');
  return cleaned ? Number(cleaned) : 0;
};

const formatCurrency = (value: number): string =>
  `$${Math.round(value).toLocaleString()}`;

const formatNumber = (value: number): string =>
  Math.round(value).toLocaleString();

const formatPercent = (value: number): string =>
  `${value.toFixed(1)}%`;

const sliceByDateRange = <T,>(items: T[], dateRange: DashboardFilters['dateRange']): T[] => {
  if (dateRange === '12months') return items;
  const count = dateRange === '7days' ? 3 : 6;
  return items.slice(-count);
};

const filterByUserType = (
  items: UserDistribution[],
  userType: DashboardFilters['userType']
): UserDistribution[] => {
  if (userType === 'all') return items;
  return items.filter((item) => item.type.toLowerCase() === userType);
};

export const fetchDashboardData = async (
  filters: DashboardFilters
): Promise<DashboardStats> => {
  try {
    // Simulate network delay
    await delay(1000);

    // Mock API response
    // Real implementation :
    // const response = await axios.get('/api/dashboard/stats');
    // return response.data;

    const baseStats = mockData.stats as DashboardStats;

    const filteredDistribution = filterByUserType(
      baseStats.userDistribution,
      filters.userType
    );
    const totalUsers = baseStats.userDistribution.reduce(
      (sum, item) => sum + item.count,
      0
    );
    const selectedUsers = filteredDistribution.reduce(
      (sum, item) => sum + item.count,
      0
    );
    const userRatio = totalUsers > 0 ? selectedUsers / totalUsers : 1;

    const totalRevenueValue = parseNumber(baseStats.kpis.totalRevenue.value);
    const totalOrdersValue = parseNumber(baseStats.kpis.totalOrders.value);
    const conversionRateValue = parseNumber(baseStats.kpis.conversionRate.value);

    const trafficTotal =
      baseStats.trafficSources.organic +
      baseStats.trafficSources.paid +
      baseStats.trafficSources.social +
      baseStats.trafficSources.referral;
    const trafficScale = trafficTotal > 0 ? 100 / trafficTotal : 1;

    return {
      ...baseStats,
      kpis: {
        ...baseStats.kpis,
        totalRevenue: {
          ...baseStats.kpis.totalRevenue,
          value: formatCurrency(totalRevenueValue * userRatio),
        },
        totalUsers: {
          ...baseStats.kpis.totalUsers,
          value: formatNumber(selectedUsers),
        },
        totalOrders: {
          ...baseStats.kpis.totalOrders,
          value: formatNumber(totalOrdersValue * userRatio),
        },
        conversionRate: {
          ...baseStats.kpis.conversionRate,
          value: formatPercent(conversionRateValue),
        },
      },
      revenueOverTime: sliceByDateRange(baseStats.revenueOverTime, filters.dateRange),
      ordersPerMonth: sliceByDateRange(baseStats.ordersPerMonth, filters.dateRange),
      userDistribution:
        filters.userType === 'all'
          ? baseStats.userDistribution
          : filteredDistribution.map((item) => ({
              ...item,
              percentage: 100,
            })),
      trafficSources: {
        organic: Math.round(baseStats.trafficSources.organic * trafficScale),
        paid: Math.round(baseStats.trafficSources.paid * trafficScale),
        social: Math.round(baseStats.trafficSources.social * trafficScale),
        referral: Math.round(baseStats.trafficSources.referral * trafficScale),
      },
    };
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
    throw new Error('Failed to fetch dashboard data');
  }
};
