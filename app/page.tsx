// src/app/page.tsx

'use client';

import { useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { FilterSection } from '@/components/dashboard/FilterSection';
import { KPICard } from '@/components/dashboard/KPICard';
import { KPICardSkeleton } from '@/components/dashboard/KPICardSkeleton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loadDashboardData } from '@/redux/slices/dashboardSlice';
import { RevenueLineChart } from '@/components/dashboard/charts/RevenueLineChart';
import { OrdersBarChart } from '@/components/dashboard/charts/OrdersBarChart';
import { UserDistributionPieChart } from '@/components/dashboard/charts/UserDistributionPieChart';
import TrafficSourceChart from '@/components/dashboard/charts/TrafficSourceChart';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard);
  const filters = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(loadDashboardData(filters));
  }, [dispatch, filters]);

  if (error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="text-center p-6 rounded-2xl border" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-card)' }}>
            <p className="text-foreground font-semibold mb-4">Error loading dashboard</p>
            <p className="text-sm text-muted-foreground mb-4">{error}</p>
            <button
              onClick={() => dispatch(loadDashboardData(filters))}
              className="px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Retry
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6 ">
       
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Analytics Overview</h2>
          <p className="text-sm text-muted-foreground">Track your business performance</p>
        </div>

        
        <FilterSection />

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {loading ? (
            <>
              <KPICardSkeleton />
              <KPICardSkeleton />
              <KPICardSkeleton />
              <KPICardSkeleton />
            </>
          ) : data ? (
            <>
              <KPICard data={data.kpis.totalRevenue} />
              <KPICard data={data.kpis.totalUsers} />
              <KPICard data={data.kpis.totalOrders} />
              <KPICard data={data.kpis.conversionRate} />
            </>
          ) : null}
        </div>

  {/* Charts */}
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <KPICardSkeleton />
          <KPICardSkeleton />
          <KPICardSkeleton />
        </div>
      ) : data ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <RevenueLineChart data={data.revenueOverTime} />
          </div>
          <OrdersBarChart data={data.ordersPerMonth} />
          <UserDistributionPieChart data={data.userDistribution} />
          <TrafficSourceChart data={data.trafficSources} />
        </div>
      ) : null}
      </div>
    </MainLayout>
  );
}
