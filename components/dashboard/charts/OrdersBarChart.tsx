

'use client';

import { Card } from '@/components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { OrderDataPoint } from '@/types/dashboard';

interface OrdersBarChartProps {
  data: OrderDataPoint[];
}

export function OrdersBarChart({ data }: OrdersBarChartProps) {
  const gridColor = 'var(--color-border)';
  const axisColor = 'var(--color-muted-foreground)';
  const tooltipBg = 'var(--color-card)';
  const tooltipBorder = 'var(--color-border)';
  const tooltipText = 'var(--color-foreground)';
  const barColor = 'var(--color-emerald-400)';

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Orders Per Month
      </h3>
      <div className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
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
              cursor={{ fill: 'var(--color-accent)' }}
              formatter={(value) => [
                typeof value === 'number' ? value : Number(value) || 0,
                'Orders',
              ]}
            />
            <Bar
              dataKey="orders"
              fill={barColor}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
