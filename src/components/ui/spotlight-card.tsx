'use client';

import React, { useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps {
  children: React.ReactNode;
  /** Visual shell: background, border, radius and padding. */
  className?: string;
  /** Layout of the content layer. */
  contentClassName?: string;
  /** Radial glow colour (rgba) following the pointer. */
  glowColor?: string;
}

/**
 * SpotlightCard — pointer-tracked radial glow plus a violet→cyan border
 * beam on hover. Pointer updates are rAF-throttled and only mutate CSS
 * custom properties, so no React re-render happens while moving.
 */
export function SpotlightCard({
  children,
  className,
  contentClassName,
  glowColor = 'rgba(99, 102, 241, 0.16)',
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      card.style.setProperty('--spot-x', `${x}px`);
      card.style.setProperty('--spot-y', `${y}px`);
      frame.current = 0;
    });
  }, []);

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--spot-x', '50%');
    card.style.setProperty('--spot-y', '50%');
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ '--spot-color': glowColor } as React.CSSProperties}
      className={cn('spotlight-card group relative overflow-hidden', className)}
    >
      <span className="spotlight-card__border-glow" aria-hidden="true" />
      <span className="spotlight-card__beam" aria-hidden="true" />
      <span className="spotlight-card__glow" aria-hidden="true" />
      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </div>
  );
}
