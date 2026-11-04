import React from 'react';
import { cn } from '@/lib/utils';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  /** Seconds for a full loop. Slower reads more premium. */
  duration?: number;
  className?: string;
}

/**
 * InfiniteMarquee — duplicated track translated by -50% for a seamless
 * right-to-left loop. Only `transform` animates, and edges are feathered
 * with a mask so the loop never shows a hard cut.
 */
export function InfiniteMarquee({ children, duration = 48, className }: InfiniteMarqueeProps) {
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
