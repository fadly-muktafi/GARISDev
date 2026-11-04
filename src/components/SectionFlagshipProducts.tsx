'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { FLAGSHIP_PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/data';
import { COMPANY_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="font-display text-xs font-bold text-accent-violet-light tracking-wider">
              PRODUK UNGGULAN
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink-primary tracking-tight">
              Solusi Digital Flagship Siap Implementasi
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-ink-secondary max-w-md">
            Ekosistem platform perangkat lunak siap pakai berstandar enterprise yang telah teruji untuk efisiensi operasional lintas industri.
          </p>
        </div>

        {/* Filter Tabs (Interactive with Clear Active State & Touch Targets >= 44px) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none" role="tablist">
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
                  'press-feedback whitespace-nowrap px-5 py-3 rounded-full text-xs sm:text-sm font-display font-semibold transition-all min-h-[44px] flex items-center justify-center',
                  isActive
                    ? 'bg-accent-indigo-btn text-white shadow-md shadow-accent-indigo-btn/30 border border-white/10'
                    : 'bg-transparent hover:bg-white/5 text-ink-secondary hover:text-ink-primary border border-white/15'
                )}
              >
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="inline sm:hidden">{cat.mobileLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid (3 Cols Desktop, 2 Tablet, 1 Mobile) */}
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
                className="group p-7 rounded-2xl bg-ground-elevated hover:bg-ground-surface border border-white/5 hover:border-white/10 transition-all duration-200 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  {/* Card Header: Name & Module Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-xl text-ink-primary group-hover:text-white transition-colors">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tested Other Solutions Banner */}
        <div className="p-5 md:p-6 rounded-2xl bg-ground-surface border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-ground-elevated border border-accent-amber/25 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-accent-amber" />
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-secondary">
              <strong className="text-ink-primary font-semibold">Solusi Teruji Lainnya:</strong> E-Government Application, Geospatial Housing Mapping (GIS), Agricultural Insurance Claim (E-Claim Jasindo), & Matkomlek Asset Management.
            </p>
          </div>

          <a
            href={COMPANY_INFO.pdfPath}
            download={COMPANY_INFO.pdfFilename}
            className="press-feedback inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold text-accent-violet-light hover:text-white shrink-0 group self-start sm:self-auto min-h-[44px] items-center"
          >
            <span>Lihat di Dokumen Profil</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
