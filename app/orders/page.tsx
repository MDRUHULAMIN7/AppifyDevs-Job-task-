import { MainLayout } from '@/components/layout/MainLayout';

const orders = [
  { id: '#1048', customer: 'Sarah M.', status: 'Processing', total: '$245.00' },
  { id: '#1049', customer: 'Jose L.', status: 'Shipped', total: '$129.00' },
  { id: '#1050', customer: 'Amelia R.', status: 'Delivered', total: '$89.00' },
  { id: '#1051', customer: 'Kai T.', status: 'Processing', total: '$312.00' },
];

export default function OrdersPage() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Orders</h2>
          <p className="text-sm text-muted-foreground">
            Track recent purchases and fulfillment status.
          </p>
        </div>

        <div className="rounded-2xl border bg-card overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
          <div className="grid grid-cols-4 gap-2 px-5 py-3 text-xs font-semibold text-muted-foreground border-b" style={{ borderColor: 'var(--color-border)' }}>
            <span>Order</span>
            <span>Customer</span>
            <span>Status</span>
            <span className="text-right">Total</span>
          </div>
          <div className="divide-y" style={{ borderColor: 'var(--color-border)' }}>
            {orders.map((order) => (
              <div key={order.id} className="grid grid-cols-4 gap-2 px-5 py-4 text-sm text-foreground">
                <span className="font-medium">{order.id}</span>
                <span>{order.customer}</span>
                <span className="text-muted-foreground">{order.status}</span>
                <span className="text-right font-semibold">{order.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
