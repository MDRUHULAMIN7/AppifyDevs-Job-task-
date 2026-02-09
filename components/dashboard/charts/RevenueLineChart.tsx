// src/components/dashboard/charts/RevenueLineChart.tsx

'use client';

import { Card } from '@/components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { RevenueDataPoint } from '@/types/dashboard';

interface RevenueLineChartProps {
  data: RevenueDataPoint[];
}

export function RevenueLineChart({ data }: RevenueLineChartProps) {
  const gridColor = 'var(--color-border)';
  const axisColor = 'var(--color-muted-foreground)';
  const tooltipBg = 'var(--color-card)';
  const tooltipBorder = 'var(--color-border)';
  const tooltipText = 'var(--color-foreground)';
  const lineColor = 'var(--color-primary)';

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Revenue Over Time
      </h3>
      <div className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis
              dataKey="month"
              stroke={axisColor}
              fontSize={12}
              axisLine={{ stroke: axisColor }}
              tick={{ fill: axisColor }}
              tickLine={{ stroke: axisColor }}
            />
            <YAxis
              stroke={axisColor}
              fontSize={12}
              tickFormatter={(value) => `$${value / 1000}k`}
              axisLine={{ stroke: axisColor }}
              tick={{ fill: axisColor }}
              tickLine={{ stroke: axisColor }}
            />
            <Tooltip
              wrapperStyle={{ color: tooltipText }}
              contentStyle={{
                backgroundColor: tooltipBg,
                border: `1px solid ${tooltipBorder}`,
                borderRadius: '8px',
                color: tooltipText,
              }}
              labelStyle={{ color: tooltipText }}
              itemStyle={{ color: tooltipText }}
              cursor={{ stroke: axisColor }}
              formatter={(value) => [
                typeof value === 'number'
                  ? `$${value.toLocaleString()}`
                  : `$${Number(value) || 0}`,
                'Revenue',
              ]}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke={lineColor}
              strokeWidth={2}
              dot={{ fill: lineColor, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
