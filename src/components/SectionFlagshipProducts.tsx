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
    <section id="produk" className="bg-night py-20 text-paper md:py-28">
      <div className="shell">
        <div className="grid gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal>
            <h2 className="max-w-[20ch] text-balance font-display text-[clamp(1.85rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.035em]">
              Enam platform. Siap beroperasi.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[44ch] text-[14px] leading-relaxed text-paper/65 lg:text-[15px]">
              Perangkat lunak yang sudah dipakai di lapangan: dari meja resepsionis
              dan lantai produksi hingga ruang kendali darurat.
            </p>
          </Reveal>
        </div>

        <div
          role="group"
          aria-label="Filter kategori platform"
          className="no-scrollbar mt-10 flex gap-7 overflow-x-auto border-b border-paper/10 pb-0 [mask-image:linear-gradient(to_right,#000_92%,transparent)] md:mt-14 md:flex-wrap md:overflow-visible md:[mask-image:none]"
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
                    ? 'border-brand-light text-paper'
                    : 'border-transparent text-paper/55 hover:text-paper/85'
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
                  <article className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-night-elevated p-6 transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-night-surface md:min-h-[360px] md:p-7">
                    <ProductPreview variant={product.preview} />

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <span className="max-w-[18ch] text-[9.5px] uppercase leading-relaxed tracking-[0.16em] text-paper/55">
                        {product.badge}
                      </span>
                    </div>

                    <div className="relative z-10 mt-24">
                      <h3 className="font-display text-[clamp(1.7rem,2.4vw,2rem)] font-medium leading-none tracking-[-0.035em]">
                        {product.name}
                      </h3>
                      <p className="mt-3 max-w-[34ch] text-[12.5px] leading-relaxed text-paper/60">
                        {product.description}
                      </p>
                      <p className="mt-5 text-[9.5px] uppercase tracking-[0.15em] text-paper/50">
                        {product.modules.join(' · ')}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-brand-light transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100"
                    />
                  </article>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 sm:flex-row sm:items-baseline sm:justify-between">
          <span className="text-[10px] uppercase tracking-[0.18em] text-paper/45">Solusi teruji lainnya</span>
          <p className="max-w-[62ch] text-[12.5px] leading-relaxed text-paper/65">
            E-Government Application · Geospatial Housing Mapping (GIS) · Agricultural
            Insurance Claim (Jasindo) · Matkomlek Asset Management
          </p>
        </div>
      </div>
    </section>
  );
}
