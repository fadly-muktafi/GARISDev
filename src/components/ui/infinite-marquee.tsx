import React from 'react';
import { cn } from '@/lib/utils';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  /** Seconds for a full loop. Slower reads more premium. */
  duration?: number;
  className?: string;
}

/**
 * InfiniteMarquee: two identical tracks translated by -50% for a seamless
 * loop. Pauses on hover; edges are softened with a CSS mask.
 */
export function InfiniteMarquee({ children, duration = 46, className }: InfiniteMarqueeProps) {
  return (
    <div
      className={cn('marquee relative overflow-hidden', className)}
      style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee__track">
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
