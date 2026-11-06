'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FLAGSHIP_PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/data';
import { cn } from '@/lib/utils';
import { SpotlightCard } from './ui/spotlight-card';

export function SectionFlagshipProducts() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts =
    activeCategory === 'all'
      ? FLAGSHIP_PRODUCTS
      : FLAGSHIP_PRODUCTS.filter((p) => p.category === activeCategory || p.id === activeCategory);

  return (
    <section id="produk" className="py-20 md:py-28 bg-ground-base border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink-primary tracking-tight">
              Solusi Digital Flagship Siap Implementasi
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-ink-secondary max-w-md">
            Ekosistem platform perangkat lunak siap pakai berstandar enterprise yang telah teruji untuk efisiensi operasional lintas industri.
          </p>
        </div>

        {/* Filter Tabs with Framer Motion Sliding Pill (layoutId="productTab") */}
        <div
          className="flex items-center gap-1.5 p-1 rounded-full bg-ground-surface/70 border border-white/[0.08] backdrop-blur-sm overflow-x-auto pb-1 scrollbar-none md:flex-wrap md:overflow-visible md:pb-1 w-fit max-w-full"
          role="tablist"
        >
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'relative press-feedback whitespace-nowrap px-4 py-2.5 rounded-full text-xs sm:text-sm font-display font-semibold transition-colors duration-200 min-h-[44px] flex items-center justify-center z-10',
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-ink-secondary hover:text-ink-primary'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="productTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-indigo-btn to-accent-violet shadow-[0_0_20px_rgba(99,102,241,0.35)] -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="hidden sm:inline relative z-10">{cat.label}</span>
                <span className="inline sm:hidden relative z-10">{cat.mobileLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid with 3D Micro-Tilt Interaction */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="h-full [perspective:1000px] group/card3d"
              >
                <SpotlightCard
                  glowColor={`${product.badgeColor}28`}
                  className="h-full rounded-2xl border border-white/[0.08] hover:border-violet-500/40 bg-ground-elevated p-7 hover:bg-ground-surface transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card3d:[transform:rotateX(2deg)_rotateY(-2deg)_translateY(-6px)] group-hover/card3d:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.25)]"
                  contentClassName="flex h-full flex-col justify-between gap-6"
                >
                  <div className="flex flex-col gap-4">
                    {/* Card Header: Name & Module Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-xl text-ink-primary group-hover:text-white transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]">
                        {product.name}
                      </h3>
                      <span
                        className="py-1 px-3 rounded-full bg-ground-surface text-[11px] font-bold tracking-wider font-display border border-white/5"
                        style={{ color: product.badgeColor }}
                      >
                        {product.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-ink-secondary leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Modules Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {product.modules.map((mod) => (
                      <span
                        key={mod}
                        className="py-1 px-2.5 rounded-md bg-ground-surface text-ink-secondary text-xs font-mono border border-white/5"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tested Other Solutions Banner */}
        <div className="p-5 md:p-6 rounded-2xl bg-ground-surface border border-white/5 flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-ground-elevated border border-accent-amber/25 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-accent-amber" />
          </div>
          <p className="font-sans text-xs sm:text-sm text-ink-secondary">
            <strong className="text-ink-primary font-semibold">Solusi Teruji Lainnya:</strong> E-Government Application, Geospatial Housing Mapping (GIS), Agricultural Insurance Claim (E-Claim Jasindo), & Matkomlek Asset Management.
          </p>
        </div>
      </div>
    </section>
  );
}
