import React from 'react';
import { cn } from '@/lib/utils';

type PreviewVariant = 'chart' | 'list' | 'map';

interface ProductPreviewProps {
  variant: PreviewVariant;
  className?: string;
}

/**
 * Decorative interface blueprint: no fake screenshots, just the skeleton
 * of an operational product: a window, a rail, and a working surface.
 */
export function ProductPreview({ variant, className }: ProductPreviewProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute -right-5 top-14 w-[66%] origin-top-right transition-all duration-[280ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:opacity-100 sm:right-6 sm:top-9 sm:w-[62%]',
        'opacity-85',
        className
      )}
    >
      <div className="max-h-[124px] overflow-hidden border border-line bg-paper-deep/70 p-3 sm:max-h-none">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-ink/30" />
          <span className="h-1 w-1 rounded-full bg-ink/20" />
          <span className="h-1 w-1 rounded-full bg-ink/20" />
          <span className="ml-auto h-1 w-10 bg-ink/10" />
        </div>

        <div className="grid grid-cols-[26%_1fr] gap-3">
          <div className="flex flex-col gap-1.5 border-r border-line pr-2">
            <span className="h-1 w-full bg-ink/20" />
            <span className="h-1 w-4/5 bg-ink/10" />
            <span className="h-1 w-3/5 bg-ink/10" />
            <span className="mt-2 h-1 w-4/5 bg-ink/10" />
            <span className="h-1 w-2/3 bg-ink/10" />
          </div>

          {variant === 'chart' && (
            <div className="flex h-[54px] items-end gap-1.5 sm:h-[68px]">
              {[38, 62, 46, 84, 58, 72, 44].map((height, index) => (
                <span
                  key={index}
                  className={cn(
                    'flex-1',
                    index === 3 ? 'bg-brand' : 'bg-ink/15'
                  )}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          )}

          {variant === 'list' && (
            <div className="flex flex-col gap-2">
              {[0, 1, 2, 3].map((row) => (
                <div key={row} className="flex items-center gap-2">
                  <span className="h-4 w-4 border border-line bg-white" />
                  <span className="h-1 flex-1 bg-ink/15" />
                  <span className="h-1 w-5 bg-ink/10" />
                  <span
                    className={cn(
                      'h-1 w-1 rounded-full',
                      row === 0 ? 'bg-brand' : 'bg-ink/20'
                    )}
                  />
                </div>
              ))}
            </div>
          )}

          {variant === 'map' && (
            <div className="relative h-[54px] overflow-hidden border border-line bg-paper/60 sm:h-[68px]">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                {Array.from({ length: 24 }).map((_, dot) => (
                  <span
                    key={dot}
                    className="m-auto h-[2px] w-[2px] rounded-full bg-ink/20"
                  />
                ))}
              </div>
              <span className="absolute left-1/4 top-1/2 h-[5px] w-[5px] rounded-full bg-brand" />
              <span className="absolute left-1/2 top-1/3 h-[3px] w-[3px] rounded-full bg-ink/50" />
              <span className="absolute bottom-1/4 right-1/4 h-[3px] w-[3px] rounded-full bg-ink/35" />
            </div>
          )}
        </div>

        <div className="mt-3 hidden items-center justify-between border-t border-line pt-2 sm:flex">
          <span className="h-1 w-8 bg-ink/15" />
          <span className="h-1 w-3 bg-ink/10" />
        </div>
      </div>
    </div>
  );
}
