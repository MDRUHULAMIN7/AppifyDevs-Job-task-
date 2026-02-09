import { Card } from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';

export function KPICardSkeleton() {
  return (
    <Card className="p-6">
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-8 w-32 mb-2" />
      <Skeleton className="h-4 w-40" />
    </Card>
  );
}