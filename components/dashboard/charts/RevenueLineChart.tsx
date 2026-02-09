// src/components/dashboard/charts/RevenueLineChart.tsx

'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { RevenueDataPoint } from '@/types/dashboard';

interface RevenueLineChartProps {
  data: RevenueDataPoint[];
}

export function RevenueLineChart({ data }: RevenueLineChartProps) {
  const total = data.reduce((sum, item) => sum + item.revenue, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="rounded-2xl border border-border/50 bg-card p-6"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-sm font-bold text-foreground">Revenue Over Time</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Total: ${total.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <TrendingUp className="h-3 w-3" />
          <span className="text-xs font-semibold">+12.5%</span>
        </div>
      </div>
      <div className="h-70">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(250, 85%, 60%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(250, 85%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="currentColor"
              className="text-border/30"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'var(--color-muted-foreground)' }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              dx={-4}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                return (
                  <div className="rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl px-4 py-3 shadow-xl">
                    <p className="text-xs font-medium text-muted-foreground mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      ${payload[0].value?.toLocaleString()}
                    </p>
                  </div>
                );
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(250, 85%, 60%)"
              strokeWidth={2.5}
              fill="url(#revenueGradient)"
              dot={false}
              activeDot={{
                r: 5,
                fill: 'hsl(250, 85%, 60%)',
                stroke: 'white',
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
