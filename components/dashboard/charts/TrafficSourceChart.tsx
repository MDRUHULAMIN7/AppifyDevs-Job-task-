

'use client';

import { memo, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { TrafficSources } from '@/types/dashboard';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface TrafficSourceChartProps {
  data: TrafficSources;
}

const COLORS = [
  { fill: 'hsl(160, 65%, 45%)', label: 'Organic' },
  { fill: 'hsl(35, 90%, 55%)', label: 'Paid' },
  { fill: 'hsl(220, 80%, 55%)', label: 'Social' },
  { fill: 'hsl(330, 70%, 55%)', label: 'Referral' },
];

function TrafficSourceChart({ data }: TrafficSourceChartProps) {
  const chartData = useMemo(
    () => [
      { name: 'Organic', value: data.organic },
      { name: 'Paid', value: data.paid },
      { name: 'Social', value: data.social },
      { name: 'Referral', value: data.referral },
    ],
    [data]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="rounded-2xl border border-border/50 bg-card p-6"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground">Traffic Sources</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Where your users come from
          </p>
        </div>
        <div className="flex items-center gap-1.5 p-2 rounded-xl bg-emerald-500/10">
          <Globe className="h-4 w-4 text-emerald-500" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-55 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {chartData.map((_, i) => (
                  <Cell key={COLORS[i].label} fill={COLORS[i].fill} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  const d = payload[0];
                  return (
                    <div className="rounded-xl border border-border/50 bg-card/95 backdrop-blur-xl px-4 py-3 shadow-xl">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {d.name}
                      </p>
                      <p className="text-sm font-bold text-foreground">
                        {d.value}%
                      </p>
                    </div>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-3.5 min-w-35">
          {chartData.map((item, i) => (
            <div key={item.name}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ background: COLORS[i].fill }}
                  />
                  <span className="text-xs font-medium text-foreground">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs font-semibold text-foreground">
                  {item.value}%
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-accent overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.1,
                    ease: 'easeOut',
                  }}
                  className="h-full rounded-full"
                  style={{ background: COLORS[i].fill }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default memo(TrafficSourceChart);
