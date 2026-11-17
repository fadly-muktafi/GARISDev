'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, Check, Loader2 } from 'lucide-react';
import { COMPANY_PROFILE } from '@/lib/data';
import { cn } from '@/lib/utils';

type Variant = 'ink' | 'paper' | 'brand' | 'outline';
type DownloadState = 'idle' | 'preparing' | 'downloading' | 'done';

interface DownloadButtonProps {
  variant?: Variant;
  className?: string;
  compact?: boolean;
  label?: string;
  showMeta?: boolean;
}

const VARIANTS: Record<Variant, string> = {
  ink: 'bg-ink text-paper hover:bg-night-surface',
  paper: 'bg-paper text-ink hover:bg-white',
  brand: 'bg-brand text-paper hover:bg-brand-deep',
  outline: 'border border-line text-ink hover:border-ink',
};

const LABELS: Record<DownloadState, string> = {
  idle: 'Unduh Profil',
  preparing: 'Menyiapkan…',
  downloading: 'Mengunduh…',
  done: 'Tersimpan',
};

export function DownloadButton({
  variant = 'ink',
  className,
  compact = false,
  label,
  showMeta = false,
}: DownloadButtonProps) {
  const [state, setState] = useState<DownloadState>('idle');
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  const handleClick = () => {
    if (state === 'preparing' || state === 'downloading') return;

    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    setState('preparing');
    timers.current.push(window.setTimeout(() => setState('downloading'), 420));
    timers.current.push(window.setTimeout(() => setState('done'), 1250));
    timers.current.push(window.setTimeout(() => setState('idle'), 3400));
  };

  const busy = state === 'preparing' || state === 'downloading';
  const text =
    state === 'idle'
      ? label ?? (compact ? 'Profil PDF' : LABELS.idle)
      : LABELS[state];

  return (
    <a
      href={COMPANY_PROFILE.href}
      download={COMPANY_PROFILE.fileName}
      onClick={handleClick}
      aria-live="polite"
      className={cn(
        'press group inline-flex min-h-[52px] select-none items-center justify-center gap-2.5 px-6 text-[13px] font-medium tracking-[-0.01em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
        VARIANTS[variant],
        className
      )}
    >
      {busy ? (
        <Loader2
          className="h-4 w-4 shrink-0 animate-spin motion-reduce:animate-none"
          strokeWidth={1.5}
        />
      ) : state === 'done' ? (
        <Check className="h-4 w-4 shrink-0" strokeWidth={1.75} />
      ) : (
        <ArrowDownToLine
          className="h-4 w-4 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0.5"
          strokeWidth={1.5}
        />
      )}

      <span className="whitespace-nowrap">{text}</span>

      {showMeta && (
        <span className="ml-1 hidden pl-2.5 text-[10px] uppercase tracking-[0.14em] opacity-80 sm:inline">
          {COMPANY_PROFILE.size}
        </span>
      )}
    </a>
  );
}
