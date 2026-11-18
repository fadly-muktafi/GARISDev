'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Sparkles,
  Building2,
  Store,
  Briefcase,
  Hotel,
  Ambulance,
  BrainCircuit,
  Check,
  Layers,
} from 'lucide-react';
import {
  FLAGSHIP_PRODUCTS,
  PRODUCT_CATEGORIES,
  OTHER_DIGITAL_SOLUTIONS,
} from '@/lib/data';
import { cn } from '@/lib/utils';
import { Reveal } from './ui/reveal';

const PRODUCT_ICON_MAP = {
  sparkles: Sparkles,
  'building-2': Building2,
  store: Store,
  briefcase: Briefcase,
  hotel: Hotel,
  ambulance: Ambulance,
  'brain-circuit': BrainCircuit,
};

export function SectionFlagshipProducts() {
  const [activeCategory, setActiveCategory] = useState('all');
  const reduce = useReducedMotion();

  const filteredProducts =
    activeCategory === 'all'
      ? FLAGSHIP_PRODUCTS
      : FLAGSHIP_PRODUCTS.filter((product) => product.category === activeCategory);

  return (
    <section id="produk" className="bg-paper py-20 text-ink md:py-28 border-t border-line">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              Platform &amp; Produk Flagship
            </span>
            <h2 className="mt-2 text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em]">
              7 Platform Unggulan Siap Pakai
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              Solusi perangkat lunak terintegrasi yang dirancang khusus untuk memecahkan tantangan operasional spesifik di berbagai sektor industri: perhotelan, hunian vertikal, pusat perbelanjaan, hingga manajemen ambulans.
            </p>
          </Reveal>
        </div>

        {/* Filter Bar */}
        <div
          role="group"
          aria-label="Filter kategori platform"
          className="no-scrollbar mt-10 flex gap-4 overflow-x-auto border-b border-line pb-0 [mask-image:linear-gradient(to_right,#000_94%,transparent)] md:mt-14 md:flex-wrap md:overflow-visible md:[mask-image:none]"
        >
          {PRODUCT_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'press shrink-0 border-b-2 pb-3.5 text-[11px] font-medium tracking-[0.08em] transition-colors duration-200',
                  isActive
                    ? 'border-brand text-brand font-semibold'
                    : 'border-transparent text-ink-muted hover:text-ink'
                )}
              >
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProducts.map((product) => {
              const Icon = PRODUCT_ICON_MAP[product.iconName] || Layers;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, transform: reduce ? 'none' : 'translateY(10px)' }}
                  animate={{ opacity: 1, transform: 'translateY(0px)' }}
                  exit={{ opacity: 0, transform: reduce ? 'none' : 'scale(0.98)' }}
                  transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                >
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden bg-white p-6 sm:p-7 border border-line transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-brand/40 hover:shadow-sm">
                    <div>
                      {/* Top Meta */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[12px] font-semibold text-ink-faint">
                            {product.number}
                          </span>
                          <span className="rounded-full border border-brand/15 bg-brand/5 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-brand">
                            {product.badge}
                          </span>
                        </div>
                        <Icon
                          className="h-5 w-5 text-ink-soft transition-colors duration-200 group-hover:text-brand"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Header */}
                      <div className="mt-5">
                        <h3 className="font-display text-[21px] sm:text-[23px] font-medium leading-none tracking-[-0.03em] text-ink">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-[12px] font-medium text-brand">
                          {product.subheading}
                        </p>
                        <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Modules Checklist */}
                    <div className="mt-6 border-t border-line/60 pt-4">
                      <span className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink-faint block mb-2.5">
                        Modul Utama:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.modules.map((mod) => (
                          <span
                            key={mod}
                            className="inline-flex items-center gap-1 rounded bg-paper px-2 py-0.5 text-[11px] font-medium text-ink-soft"
                          >
                            <Check className="h-3 w-3 text-brand" strokeWidth={2} />
                            {mod}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100"
                    />
                  </article>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Other Digital Solutions Grid (15 Solusi) */}
        <div className="mt-20 border-t border-line pt-16 md:mt-24 md:pt-20">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14">
            <Reveal>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                Kapabilitas Sistem Kustom
              </span>
              <h3 className="mt-2 text-balance font-display text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink">
                Solusi Digital Lainnya (Other Digital Solutions)
              </h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="max-w-[44ch] text-[13.5px] leading-relaxed text-ink-muted lg:text-[14.5px]">
                Katalog sistem informasi operasional yang siap disesuaikan dan diintegrasikan dengan infrastruktur teknologi organisasi Anda.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {OTHER_DIGITAL_SOLUTIONS.map((solution, index) => (
              <Reveal key={solution} delay={(index % 3) * 0.04}>
                <div className="flex items-center gap-3 rounded bg-white p-3.5 sm:p-4 border border-line transition-colors duration-200 hover:border-brand/35">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-[12.5px] font-medium leading-snug text-ink">
                    {solution}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
