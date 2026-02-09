// src/components/dashboard/charts/UserDistributionPieChart.tsx

'use client';

import { Card } from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import type { PieLabelRenderProps } from 'recharts';
import type { UserDistribution } from '@/types/dashboard';

interface UserDistributionPieChartProps {
  data: UserDistribution[];
}

const COLORS = [
  'var(--color-primary)',
  'var(--color-emerald-400)',
  'var(--color-amber-400)',
];

export function UserDistributionPieChart({ data }: UserDistributionPieChartProps) {
  const tooltipBg = 'var(--color-card)';
  const tooltipBorder = 'var(--color-border)';
  const tooltipText = 'var(--color-foreground)';

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        User Distribution
      </h3>
      <div className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({
                x,
                y,
                textAnchor,
                dominantBaseline,
                payload,
                percent,
              }: PieLabelRenderProps) => {
                const label = payload?.type ?? payload?.name ?? 'Unknown';
                const percentValue = typeof percent === 'number' ? percent * 100 : 0;
                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor={textAnchor}
                    dominantBaseline={dominantBaseline}
                    fill={tooltipText}
                    fontSize={12}
                  >
                    {`${label}: ${percentValue.toFixed(1)}%`}
                  </text>
                );
              }}
              outerRadius={80}
              dataKey="count"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
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
              formatter={(value) => [
                typeof value === 'number' ? value : Number(value) || 0,
                'Users',
              ]}
            />
            <Legend wrapperStyle={{ color: tooltipText }} iconSize={10} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
