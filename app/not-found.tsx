// src/app/not-found.tsx

'use client';

import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div
          className="text-center p-8 rounded-2xl border max-w-md w-full"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-card)' }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Page not found</h1>
          <p className="text-sm text-muted-foreground mb-6">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
