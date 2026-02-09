import { Card } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';

export function KPICardSkeleton() {
  return (
    <Card className="rounded-2xl border-border/50 bg-card p-5">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <Skeleton className="h-4 w-24 rounded-lg" />
          <Skeleton className="h-9 w-32 rounded-lg" />
          <Skeleton className="h-5 w-28 rounded-full" />
        </div>
        <Skeleton className="h-11 w-11 rounded-2xl" />
      </div>
    </Card>
  );
}
