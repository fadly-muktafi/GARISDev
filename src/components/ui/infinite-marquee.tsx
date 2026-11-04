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
export function InfiniteMarquee({ children, duration = 40, className }: InfiniteMarqueeProps) {
  return (
    <div
      className={cn('marquee relative overflow-hidden', className)}
      style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
    >
      {/* Vignette fade left & right */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090A0F] to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090A0F] to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="marquee__track">
        <div className="marquee__group gap-10 md:gap-14 pr-10 md:pr-14">{children}</div>
        <div className="marquee__group gap-10 md:gap-14 pr-10 md:pr-14" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
