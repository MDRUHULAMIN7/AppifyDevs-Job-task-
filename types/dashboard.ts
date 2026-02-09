
export interface KPIData {
  title: string;
  value: string | number;
  change: number;  
  trend: 'up' | 'down';
  icon?: string;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
}

export interface OrderDataPoint {
  month: string;
  orders: number;
}

export interface UserDistribution {
  type: 'Free' | 'Premium' | 'Enterprise';
  count: number;
  percentage: number;
}

export interface TrafficSources {
  organic: number;
  paid: number;
  social: number;
  referral: number;
}

export interface DashboardStats {
  kpis: {
    totalRevenue: KPIData;
    totalUsers: KPIData;
    totalOrders: KPIData;
    conversionRate: KPIData;
  };
  revenueOverTime: RevenueDataPoint[];
  ordersPerMonth: OrderDataPoint[];
  userDistribution: UserDistribution[];
  trafficSources: TrafficSources;
}

export type DateRange = '7days' | '30days' | '12months';
export type UserType = 'all' | 'free' | 'premium' | 'enterprise';

export interface DashboardFilters {
  dateRange: DateRange;
  userType: UserType;
}
