import { MainLayout } from '@/components/layout/MainLayout';

const settings = [
  {
    title: 'Profile',
    description: 'Update your name, avatar, and contact details.',
  },
  {
    title: 'Notifications',
    description: 'Manage alerts, weekly summaries, and push notifications.',
  },
  {
    title: 'Security',
    description: 'Change password and configure two-factor authentication.',
  },
  {
    title: 'Billing',
    description: 'Review invoices, payment methods, and plan details.',
  },
];

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Settings</h2>
          <p className="text-sm text-muted-foreground">
            Manage your account preferences and workspace configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {settings.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border bg-card"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <p className="text-base font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              <button
                className="mt-4 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                type="button"
              >
                Manage
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
