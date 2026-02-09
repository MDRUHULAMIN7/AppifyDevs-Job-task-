'use client';

import { Card } from '@/components/ui/Card';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { KPIData } from '@/types/dashboard';
import { formatPercentage } from '@/lib/utils/formatters';

interface KPICardProps {
  data: KPIData;
}

export function KPICard({ data }: KPICardProps) {
  const isPositive = data.trend === 'up';

  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">
            {data.title}
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {data.value}
          </h3>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4 text-green-600" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-600" />
            )}
            <span className={`text-sm font-medium ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {formatPercentage(data?.change)}
            </span>
            <span className="text-sm text-gray-500">vs last period</span>
          </div>
        </div>
      </div>
    </Card>
  );
}