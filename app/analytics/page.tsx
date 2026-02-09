import { MainLayout } from '@/components/layout/MainLayout';

export default function AnalyticsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Analytics
          </h2>
          <p className="text-sm text-muted-foreground">
            High-level metrics and trends for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="p-6 rounded-2xl border bg-card" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm text-muted-foreground mb-2">Traffic Sources</p>
            <p className="text-2xl font-semibold text-foreground">52.4%</p>
            <p className="text-xs text-muted-foreground mt-2">Organic search leads the pack.</p>
          </div>
          <div className="p-6 rounded-2xl border bg-card" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm text-muted-foreground mb-2">Conversion Funnel</p>
            <p className="text-2xl font-semibold text-foreground">4.8%</p>
            <p className="text-xs text-muted-foreground mt-2">Up 0.6% from last week.</p>
          </div>
          <div className="p-6 rounded-2xl border bg-card" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm text-muted-foreground mb-2">Top Region</p>
            <p className="text-2xl font-semibold text-foreground">North America</p>
            <p className="text-xs text-muted-foreground mt-2">47% of total sessions.</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl border bg-card" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm text-muted-foreground">Detailed charts coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
}
