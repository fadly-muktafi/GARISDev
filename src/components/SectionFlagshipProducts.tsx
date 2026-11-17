'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FLAGSHIP_PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Reveal } from './ui/reveal';
import { ProductPreview } from './ui/product-preview';

export function SectionFlagshipProducts() {
  const [activeCategory, setActiveCategory] = useState('all');
  const reduce = useReducedMotion();

  const filteredProducts =
    activeCategory === 'all'
      ? FLAGSHIP_PRODUCTS
      : FLAGSHIP_PRODUCTS.filter(
          (product) => product.category === activeCategory || product.id === activeCategory
        );

  return (
    <section id="produk" className="bg-paper py-20 text-ink md:py-28 border-t border-line">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="max-w-[22ch] text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em]">
              Portofolio platform dan solusi digital unggulan
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[46ch] text-[14px] leading-relaxed text-ink-muted lg:text-[15px]">
              Solusi perangkat lunak terintegrasi yang dikembangkan untuk menjawab
              kebutuhan operasional nyata di sektor perhotelan, hunian vertikal,
              pengelolaan pusat perbelanjaan, hingga manajemen darurat medis.
            </p>
          </Reveal>
        </div>

        <div
          role="group"
          aria-label="Filter kategori platform"
          className="no-scrollbar mt-10 flex gap-7 overflow-x-auto border-b border-line pb-0 [mask-image:linear-gradient(to_right,#000_92%,transparent)] md:mt-14 md:flex-wrap md:overflow-visible md:[mask-image:none]"
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
                  'press shrink-0 border-b pb-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 sm:text-[11px]',
                  isActive
                    ? 'border-brand text-brand'
                    : 'border-transparent text-ink-muted hover:text-ink'
                )}
              >
                <span className="hidden sm:inline">{category.label}</span>
                <span className="inline sm:hidden">{category.mobileLabel}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProducts.map((product) => {
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, transform: reduce ? 'none' : 'translateY(10px)' }}
                  animate={{ opacity: 1, transform: 'translateY(0px)' }}
                  exit={{ opacity: 0, transform: reduce ? 'none' : 'scale(0.98)' }}
                  transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                >
                  <article className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-white p-6 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-md md:min-h-[360px] md:p-7 border border-line">
                    <ProductPreview variant={product.preview} />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <span className="max-w-[18ch] text-[9.5px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-brand">
                        {product.badge}
                      </span>
                    </div>

                    <div className="relative z-10 mt-24">
                      <h3 className="font-display text-[clamp(1.7rem,2.4vw,2rem)] font-medium leading-none tracking-[-0.035em] text-ink">
                        {product.name}
                      </h3>
                      <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-ink-muted">
                        {product.description}
                      </p>
                      <p className="mt-5 text-[9.5px] font-medium uppercase tracking-[0.15em] text-ink-faint">
                        {product.modules.join(' · ')}
                      </p>
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

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="text-[10px] uppercase tracking-[0.18em] text-ink-faint">Solusi sistem lainnya</span>
          <p className="max-w-[64ch] text-[12.5px] leading-relaxed text-ink-muted">
            E-Government Application System · Academic Information System · Hospital Information System ·
            Geospatial Mapping (GIS) · HRIS &amp; Payroll · Financial &amp; Budget Planning
          </p>
        </div>
      </div>
    </section>
  );
}
