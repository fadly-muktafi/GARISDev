'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

/**
 * BorderBeam — 21st.dev / Magic UI style perimeter light beam
 * that circles along the rounded contour of a card container smoothly.
 */
export function BorderBeam({
  className,
  size = 300,
  duration = 12,
  borderWidth = 1.5,
  colorFrom = '#818CF8',
  colorTo = '#38BDF8',
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          '--size': `${size}px`,
          '--duration': `${duration}s`,
          '--border-width': `${borderWidth}px`,
          '--color-from': colorFrom,
          '--color-to': colorTo,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden z-20',
        className
      )}
      aria-hidden="true"
    >
      <div className="border-beam-ring" />
    </div>
  );
}
