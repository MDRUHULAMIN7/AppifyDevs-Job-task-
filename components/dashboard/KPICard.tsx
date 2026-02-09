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
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {data.title}
          </p>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {data.value}
          </h3>
          <div className="flex items-center gap-1">
            {isPositive ? (
              <TrendingUp className="w-4 h-4" style={{ color: 'var(--color-emerald-400)' }} />
            ) : (
              <TrendingDown className="w-4 h-4" style={{ color: 'var(--color-rose-500)' }} />
            )}
            <span
              className="text-sm font-medium"
              style={{ color: isPositive ? 'var(--color-emerald-400)' : 'var(--color-rose-500)' }}
            >
              {formatPercentage(data?.change)}
            </span>
            <span className="text-sm text-muted-foreground">vs last period</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
