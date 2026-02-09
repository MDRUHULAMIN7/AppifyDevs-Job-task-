// src/app/page.tsx

'use client';

import { useEffect } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { FilterSection } from '@/components/dashboard/FilterSection';
import { KPICard } from '@/components/dashboard/KPICard';
import { KPICardSkeleton } from '@/components/dashboard/KPICardSkeleton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { loadDashboardData } from '@/redux/slices/dashboardSlice';
// import { RevenueLineChart } from '@/components/dashboard/charts/RevenueLineChart';
// import { OrdersBarChart } from '@/components/dashboard/charts/OrdersBarChart';
// import { UserDistributionPieChart } from '@/components/dashboard/charts/UserDistributionPieChart';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(loadDashboardData());
  }, [dispatch]);

  if (error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <div className="text-center">
            <p className="text-red-600 font-medium mb-2">Error loading dashboard</p>
            <button
              onClick={() => dispatch(loadDashboardData())}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
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
      <FilterSection />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
            {/* <RevenueLineChart data={data.revenueOverTime} /> */}
         </div>
          {/* <OrdersBarChart data={data.ordersPerMonth} /> */}
          {/* <UserDistributionPieChart data={data.userDistribution} />  */}
        </div>
      ) :null}
    </MainLayout>
  );
}