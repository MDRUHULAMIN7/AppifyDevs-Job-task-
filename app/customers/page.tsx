import type { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'Customer directory with subscription plans and recent activity.',
};

const customers = [
  { name: 'Sarah Miles', plan: 'Premium', activity: '2 days ago' },
  { name: 'Jose Lopez', plan: 'Free', activity: '5 hours ago' },
  { name: 'Amelia Rose', plan: 'Enterprise', activity: '1 day ago' },
  { name: 'Kai Thompson', plan: 'Premium', activity: '30 mins ago' },
];

export default function CustomersPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Customers</h2>
          <p className="text-sm text-muted-foreground">
            Monitor customer activity and subscription plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="p-5 rounded-2xl border bg-card"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <p className="text-base font-semibold text-foreground">{customer.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{customer.plan} Plan</p>
              <p className="text-xs text-muted-foreground mt-3">
                Last active {customer.activity}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
