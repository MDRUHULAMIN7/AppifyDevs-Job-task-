'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div
            className="text-center p-8 rounded-2xl border max-w-md w-full"
            style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-card)' }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Error</p>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Oops! Something went wrong
            </h2>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
