'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SPORTIF_VALUES } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Reveal } from './ui/reveal';

export function SectionSportifValues() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const value = SPORTIF_VALUES[active];

  return (
    <section id="nilai" className="bg-paper py-20 md:py-24">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="max-w-[24ch] text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em]">
              Tujuh huruf. Satu cara kerja
              <span className="text-brand">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[44ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              SPORTIF bukan akronim di dinding kantor. Ia menjadi standar
              keputusan harian, dari cara kami menulis kode hingga cara kami
              menjaga hubungan dengan klien.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Nilai SPORTIF"
            className="mt-12 grid grid-cols-7 border-t border-line md:mt-16"
          >
            {SPORTIF_VALUES.map((item, index) => {
              const isActive = index === active;

              const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
                if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
                event.preventDefault();

                const total = SPORTIF_VALUES.length;
                let next = index;
                if (event.key === 'ArrowRight') next = (index + 1) % total;
                else if (event.key === 'ArrowLeft') next = (index - 1 + total) % total;
                else if (event.key === 'Home') next = 0;
                else next = total - 1;

                setActive(next);
                const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
                  '[role="tab"]'
                );
                tabs?.[next]?.focus();
              };

              return (
                <button
                  key={item.letter}
                  id={`nilai-tab-${item.letter}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="nilai-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={handleKeyDown}
                  className={cn(
                    'press flex flex-col items-center justify-center gap-2.5 border-b py-5 transition-colors duration-200 sm:py-7',
                    isActive
                      ? 'border-line text-brand'
                      : 'border-line text-ink/45 hover:text-ink/70'
                  )}
                >
                  <span className="font-display text-[clamp(1.5rem,4.6vw,3.1rem)] font-medium leading-none tracking-[-0.05em]">
                    {item.letter}
                  </span>
                  <span
                    className={cn(
                      'h-[2px] transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]',
                      isActive ? 'w-6 bg-brand' : 'w-0 bg-transparent'
                    )}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          id="nilai-panel"
          role="tabpanel"
          aria-labelledby={`nilai-tab-${value.letter}`}
          tabIndex={0}
          className="grid gap-5 pt-8 md:min-h-[120px] md:grid-cols-[0.4fr_0.6fr] md:gap-16 md:pt-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${value.letter}-title`}
              initial={{ opacity: 0, transform: reduce ? 'none' : 'translateY(8px)' }}
              animate={{ opacity: 1, transform: 'translateY(0px)' }}
              exit={{ opacity: 0, transform: reduce ? 'none' : 'translateY(-6px)' }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="font-serif text-[clamp(2rem,3.4vw,2.85rem)] italic leading-none tracking-[-0.02em]">
                {value.title}
              </h3>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${value.letter}-body`}
              initial={{ opacity: 0, transform: reduce ? 'none' : 'translateY(8px)' }}
              animate={{ opacity: 1, transform: 'translateY(0px)' }}
              exit={{ opacity: 0, transform: reduce ? 'none' : 'translateY(-6px)' }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="max-w-[58ch] text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
                {value.description}
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                Nilai inti SPORTIF
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
