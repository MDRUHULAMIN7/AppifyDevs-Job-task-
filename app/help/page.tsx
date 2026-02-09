import { MainLayout } from '@/components/layout/MainLayout';

const faqs = [
  {
    q: 'How do I invite a new team member?',
    a: 'Open Settings > Team and send an invitation email.',
  },
  {
    q: 'Can I export analytics data?',
    a: 'Exports are available in the Analytics page under the report menu.',
  },
  {
    q: 'Where do I manage billing?',
    a: 'Go to Settings > Billing to update payment methods.',
  },
];

export default function HelpPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Help Center</h2>
          <p className="text-sm text-muted-foreground">
            Quick answers and resources for common questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="p-6 rounded-2xl border bg-card" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm text-muted-foreground mb-2">Getting Started</p>
            <p className="text-base font-semibold text-foreground">Setup checklist</p>
            <p className="text-xs text-muted-foreground mt-2">
              Learn the essentials to configure your workspace.
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-card" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm text-muted-foreground mb-2">Support</p>
            <p className="text-base font-semibold text-foreground">Contact team</p>
            <p className="text-xs text-muted-foreground mt-2">
              Reach out to our team for personalized help.
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-card" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm text-muted-foreground mb-2">Community</p>
            <p className="text-base font-semibold text-foreground">Best practices</p>
            <p className="text-xs text-muted-foreground mt-2">
              Browse workflows shared by other teams.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border bg-card p-6" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-sm font-semibold text-foreground mb-4">Frequently asked questions</p>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q}>
                <p className="text-sm font-medium text-foreground">{item.q}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
