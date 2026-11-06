'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Toggle the animated perimeter highlight. */
  shimmer?: boolean;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

/**
 * ShimmerButton — pill CTA with a light sweep travelling around its border.
 * Inspired by 21st.dev / Magic UI shimmer button.
 * Supports both button and anchor (when `href` is supplied).
 */
export const ShimmerButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ShimmerButtonProps
>(({ className, children, shimmer = true, href, target, rel, ...props }, ref) => {
  const content = (
    <>
      {shimmer && (
        <span className="shimmer-button__ring" aria-hidden="true">
          <span className="shimmer-button__ring-spin" />
        </span>
      )}
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  const sharedClassName = cn(
    'press-feedback relative inline-flex select-none items-center justify-center gap-2 font-display font-medium transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]',
    shimmer && 'shimmer-button',
    className
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={sharedClassName}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={sharedClassName}
      {...props}
    >
      {content}
    </button>
  );
});

ShimmerButton.displayName = 'ShimmerButton';
