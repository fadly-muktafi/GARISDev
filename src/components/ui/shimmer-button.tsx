'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Toggle the animated perimeter highlight. */
  shimmer?: boolean;
  children: React.ReactNode;
}

/**
 * ShimmerButton — pill CTA with a light sweep travelling around its border.
 * The ring is a masked conic gradient animated through a registered CSS
 * custom property, so the effect never triggers layout or paint on the text.
 */
export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({ className, children, shimmer = true, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'press-feedback relative inline-flex select-none items-center justify-center gap-2 font-display font-medium transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]',
          shimmer && 'shimmer-button',
          className
        )}
        {...props}
      >
        {shimmer && (
          <span className="shimmer-button__ring" aria-hidden="true">
            <span className="shimmer-button__ring-spin" />
          </span>
        )}
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';
