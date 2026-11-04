import React from 'react';
import { cn } from '@/lib/utils';

interface Beam {
  left: string;
  angle: string;
  duration: string;
  delay: string;
  opacity: number;
  tone: 'violet' | 'cyan';
}

const BEAMS: Beam[] = [
  { left: '4%', angle: '16deg', duration: '18s', delay: '-2s', opacity: 0.5, tone: 'violet' },
  { left: '16%', angle: '-12deg', duration: '23s', delay: '-9s', opacity: 0.34, tone: 'cyan' },
  { left: '31%', angle: '21deg', duration: '16s', delay: '-5s', opacity: 0.4, tone: 'violet' },
  { left: '47%', angle: '-19deg', duration: '25s', delay: '-14s', opacity: 0.28, tone: 'cyan' },
  { left: '62%', angle: '13deg', duration: '19s', delay: '-7s', opacity: 0.46, tone: 'violet' },
  { left: '78%', angle: '-8deg', duration: '21s', delay: '-12s', opacity: 0.34, tone: 'violet' },
  { left: '91%', angle: '25deg', duration: '17s', delay: '-4s', opacity: 0.42, tone: 'cyan' },
];

/**
 * BackgroundBeams — low-opacity engineering grid and light beams.
 * Inspired by 21st.dev's Background Beams, rebuilt with transform-only
 * animations so the hero stays on the compositor at 60fps.
 */
export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={cn('hero-atmosphere', className)} aria-hidden="true">
      <div className="hero-glow hero-glow--violet" />
      <div className="hero-glow hero-glow--cyan" />

      <div className="hero-grid-mask">
        <div className="hero-grid" />
      </div>

      <div className="hero-beams">
        {BEAMS.map((beam, index) => (
          <span
            key={index}
            className={cn('hero-beam', `hero-beam--${beam.tone}`)}
            style={
              {
                left: beam.left,
                '--beam-angle': beam.angle,
                '--beam-duration': beam.duration,
                '--beam-delay': beam.delay,
                '--beam-opacity': beam.opacity,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="hero-vignette" />
    </div>
  );
}
