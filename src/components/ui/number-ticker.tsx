'use client';

import React, { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NumberTickerProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  /** Accessible label announcing the final value while the visual counts up. */
  ariaLabel?: string;
}

function formatValue(value: number, decimals: number) {
  const factor = 10 ** decimals;
  return (Math.round(value * factor) / factor).toFixed(decimals);
}

/**
 * NumberTicker — counts from zero to `value` once it enters the viewport.
 * Updates are written straight to the text node through Framer Motion's
 * animate(), avoiding a React re-render on every frame.
 */
export function NumberTicker({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className,
  ariaLabel,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !isInView) return;

    if (reduceMotion) {
      node.textContent = `${prefix}${formatValue(value, decimals)}${suffix}`;
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${formatValue(latest, decimals)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, value, decimals, prefix, suffix, duration, reduceMotion]);

  return (
    <span
      ref={ref}
      aria-label={ariaLabel ?? `${prefix}${formatValue(value, decimals)}${suffix}`}
      className={cn('tabular-nums', className)}
    >
      {`${prefix}${formatValue(0, decimals)}${suffix}`}
    </span>
  );
}
