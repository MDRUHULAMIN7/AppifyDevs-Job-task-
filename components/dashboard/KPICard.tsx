'use client';

import { Card } from '@/components/ui/Card';
import type { ElementType } from 'react';
import {
  DollarSign,
  Users,
  ShoppingCart,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import type { KPIData } from '@/types/dashboard';

interface KPICardProps {
  data: KPIData;
}

export function KPICard({ data }: KPICardProps) {
  const isPositive = data.trend === 'up';
  const changeValue = Math.abs(data.change).toFixed(1);

  const cardConfig: Record<
    string,
    {
      icon: ElementType;
      gradient: string;
      iconBg: string;
    }
  > = {
    'Total Revenue': {
      icon: DollarSign,
      gradient: 'bg-gradient-to-br from-emerald-500/5 to-teal-500/5',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25',
    },
    'Total Users': {
      icon: Users,
      gradient: 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25',
    },
    Orders: {
      icon: ShoppingCart,
      gradient: 'bg-gradient-to-br from-violet-500/5 to-purple-500/5',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25',
    },
    'Conversion Rate': {
      icon: Percent,
      gradient: 'bg-gradient-to-br from-amber-500/5 to-orange-500/5',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/25',
    },
  };

  const config = cardConfig[data.title] ?? {
    icon: Percent,
    gradient: 'bg-gradient-to-br from-slate-500/5 to-slate-600/5',
    iconBg: 'bg-gradient-to-br from-slate-500 to-slate-600 shadow-lg shadow-slate-500/25',
  };
  const Icon = config.icon;

  return (
    <Card className="group relative rounded-2xl border-border/50 bg-card p-5 transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-0.5 overflow-hidden">
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${config.gradient}`}
      />

      <div className="relative flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{data.title}</p>
          <p className="text-3xl font-bold text-foreground tracking-tight">
            {data.value}
          </p>
          <div className="flex items-center gap-1.5">
            <div
              className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-semibold ${
                isPositive
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
              }`}
            >
              {isPositive ? (
                <ArrowUpRight className="h-3 w-3" />
              ) : (
                <ArrowDownRight className="h-3 w-3" />
              )}
              {changeValue}%
            </div>
            <span className="text-[11px] text-muted-foreground/70">
              vs last period
            </span>
          </div>
        </div>
        <div
          className={`rounded-2xl p-3 transition-transform duration-300 group-hover:scale-110 ${config.iconBg}`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className={`${config.gradient.replace('bg-gradient-to-br', 'bg-gradient-to-r')} h-full rounded-b-2xl`}
          style={{ opacity: 0.6 }}
        />
      </div>
    </Card>
  );
}
